import { getRoom } from "@/data-access/rooms"
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import {  TagList } from "@/components/tag-list";
import { DevLinkPlayer } from "./video-player";
import { splitTags } from "@/lib/utils";
import { unstable_noStore } from "next/cache";

export default async function RoomPage(props: {params: {roomid: string}}) {

    const roomid = props.params.roomid
   unstable_noStore();
    const room = await getRoom(roomid);

    if(!room){
        return <div className="text-3xl container p-8">No Room of This ID Found</div>
    }

    return(
        
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3 p-6 pr-2">
                <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                    <DevLinkPlayer room={room}/>
                </div>
            </div>
            <div className="col-span-1 p-6 pl-2">
                <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col gap-4    ">
                    <h1 className="text-xl">{room?.name}</h1>
                    <p className="text-base text-gray-600 dark:text-gray-400">{room?.description}</p>

                    <TagList tags={splitTags(room.tags)}/>
                   
                {
                    room.githubRepo && (
                    <Link
                        href={room.githubRepo} 
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon />
                        Github Rroject
                    </Link>
                    )
                }
                </div>
            </div>
        </div>


    )
    
}