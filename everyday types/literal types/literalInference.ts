declare function handleRequrest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET"} as const; // as const makes all properties to be assigned as their literal types
handleRequrest(req.url, req.method);
