// console.log("hi");
require('dotenv').config()

const express = require('express')
const app = express()
const port = 500

app.get('/', (req, res) => {
    res.send('Hello World!')
})
 
const gitD = {
    "login": "dineshdhayfule",
    "id": 109637254,
    "node_id": "U_kgDOBojuhg",
    "avatar_url": "https://avatars.githubusercontent.com/u/109637254?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dineshdhayfule",
    "html_url": "https://github.com/dineshdhayfule",
    "followers_url": "https://api.github.com/users/dineshdhayfule/followers",
    "following_url": "https://api.github.com/users/dineshdhayfule/following{/other_user}",
    "gists_url": "https://api.github.com/users/dineshdhayfule/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dineshdhayfule/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dineshdhayfule/subscriptions",
    "organizations_url": "https://api.github.com/users/dineshdhayfule/orgs",
    "repos_url": "https://api.github.com/users/dineshdhayfule/repos",
    "events_url": "https://api.github.com/users/dineshdhayfule/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dineshdhayfule/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Dinesh Dhayfule",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "ʙᴇʟɪᴇᴠᴇʀ",
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 3,
    "following": 8,
    "created_at": "2022-07-20T01:13:33Z",
    "updated_at": "2024-10-24T03:45:57Z"
}

app.get('/dd',(req,res)=>{
    res.send('sold to')
})
app.get('/aa', (req, res) => {
    res.send('sold to')
})
app.get('/yt', (req, res) => {
    res.send('<h1>clips</h1>')
})

app.get('/github/:username', (req, res) => {
    res.json(gitD)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})