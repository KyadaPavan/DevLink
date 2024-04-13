"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateRoomAction } from "./action"
import { useRouter } from "next/navigation"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
const formSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(250),
  githubRepo: z.string().min(1).max(50),
  tags: z.string().min(1).max(50),
})



export function CreateRoomForm (){

    const router = useRouter();
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description: "",
          githubRepo: "",
          tags: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await CreateRoomAction(values);
        toast({
            title: "Room Created",
            description: "Your room was succesfully created.",
          })
        router.push("/browse")
    }

    return(
    <div >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                     <Input  {...field} placeholder="Pavan Kyada"/>
                 </FormControl>
                <FormDescription>
                    This will be your public Room name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                     <Input  {...field} placeholder="I am working on a side peoject with next js, come join me."/>
                 </FormControl>
                <FormDescription>
                    Please describe what you will be coding on.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="githubRepo"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>GithubRepo</FormLabel>
                    <FormControl>
                     <Input  {...field} placeholder="https://github.com/kyadapavan"/>
                 </FormControl>
                <FormDescription>
                    Please put a Github Repo link to the project you are working on.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                     <Input  {...field} placeholder="typescript, nextjs, mongoDb, React"/>
                 </FormControl>
                <FormDescription>
                    List your programming languages, frameworks, libraries so people can find your content.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            

            <Button type="submit">Submit</Button>
            </form>
        </Form>

    </div>
    )

}