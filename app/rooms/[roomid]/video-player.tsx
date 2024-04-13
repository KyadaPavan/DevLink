"use client";
import { Room } from "@/db/schema";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { generateTokenAction } from "./action";
import { useRouter } from "next/navigation";

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;


export function DevLinkPlayer({ room }: { room: Room }) {
    const router = useRouter();
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!session.data) {
      return;
    }
    if (!room) return;
    const userid = session.data.user.id;
    const client = new StreamVideoClient({
      apiKey,
      user: { 
        id: userid,
        name: session.data.user.name ?? "Unknown", 
        image: session.data.user.image ?? undefined
      },
      tokenProvider: () => generateTokenAction(),
 
    });
    setClient(client);
    const call = client.call("default", room.id);
    call.join({ create: true });
    setCall(call);
    return () => {
      call.leave().then(() => client.disconnectUser()).catch(console.error)
     
    
    };
  }, [session, room]);

  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamTheme>
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls onLeave={() => router.push("/")} />
            <CallParticipantsList onClose={() => undefined} />
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
    )
  );
}
