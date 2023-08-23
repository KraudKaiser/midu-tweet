import {type Database} from "../types/database"

type PostsEntity = Database["public"]["Tables"]["posts"]["Row"]
type UserEntity = Database["public"]["Tables"]["users"]["Row"]

export type Post = PostsEntity & {
    user: UserEntity
}
