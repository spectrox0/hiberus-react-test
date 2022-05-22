export type Action<Type, Payload = undefined> = (payload: Payload) => Payload extends undefined? {type: Type} :{ type: Type; payload: Payload };
