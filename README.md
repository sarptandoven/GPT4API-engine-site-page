# GPT4 API Assistant Template

A minimal browser UI for sending chat messages to a server-side API endpoint.

## Security model

Do not put OpenAI API keys in browser JavaScript. The frontend posts to `/api/chat`; a backend service should own the OpenAI request and read credentials from environment variables.

## Local usage

This repository only contains the static frontend. Start any static file server from the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

The page sends requests to `POST /api/chat`, so local chat responses require a backend or local proxy mounted at that path. Without that backend, the UI loads but submitting a message will show a configuration error.

## API contract

Request body sent by the frontend:

```json
{ "message": "hello" }
```

Expected JSON response:

```json
{ "message": "response text" }
```

## Backend notes

- Keep `OPENAI_API_KEY` and other credentials on the server only.
- Return non-2xx responses for backend failures so the frontend can show an error.
- If the backend is hosted on a different origin during development, configure CORS or proxy `/api/chat` through the same origin as the static page.
