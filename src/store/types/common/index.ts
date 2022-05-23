export type Action<Type, Payload = undefined> = (
  payload: Payload extends undefined ? void : Payload,
) => Payload extends undefined ? { type: Type } : { type: Type; payload: Payload }
