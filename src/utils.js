import { dirname } from "path"
import { fileURLToPath } from "url"

export const __dirname = dirname(fileURLToPath(import.meta.url))


import { hashSync, genSaltSync, compareSync } from "bcrypt"

export const hashPass = (password) => {
    return hashSync(password, genSaltSync(10))
}

export const validPassword = (password, user) => {
    return compareSync(password, user.password)
}