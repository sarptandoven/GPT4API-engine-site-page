# GPT4 API Assistant Template

A minimal browser UI for sending chat messages to a server-side API endpoint.

## Security model

Do not put OpenAI API keys in browser JavaScript. The frontend posts to `/api/chat`; a backend service should own the OpenAI request and read credentials from environment variables.

## Local usage

Serve the static files with any local web server and provide a backend route at `/api/chat` that returns JSON in this shape:

```json
{ "message": "response text" }
```
