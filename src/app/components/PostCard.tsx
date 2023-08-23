"use client"
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { IconMessageCircle, IconHeart, IconRepeat } from "@tabler/icons-react";
import Link from "next/link";
import {useState} from "react"
export default function PostCard({
    name,
    username,
    avatar_url,
    content
}:{
    name:string,
    username:string,
    avatar_url:string,
    content:string
}){
    const [isFollowed, setIsFollowed] = useState(false);
    return (
      <Card className="shadow-none bg-transparent hover:bg-slate-800 transition cursor-pointer border-b  border-white/20">
        <CardHeader className="justify-between">
          <div className="flex gap-x-2">
            <Link href={`/${username}`}>
                <Avatar radius="full" size="md" src={avatar_url} />
            </Link>
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
              <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-xs text-white-300">
          <p>
            {content}
          </p>
         
        </CardBody>
        <CardFooter className="gap-3">
          <IconMessageCircle className="w-4 h-4" />
          <IconHeart className="w-4 h-4"/>
          <IconRepeat className="w-4 h-4"/>
        </CardFooter>
      </Card>
    );
}