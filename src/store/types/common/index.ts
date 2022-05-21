export type Action<Type, Payload = undefined> = (payload: Payload) => { type: Type; payload: Payload };
