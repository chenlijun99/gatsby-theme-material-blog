import PostHit from "./PostHit";
export enum HitComponents {
  Post,
}

export const HitComponentMap = {
  [HitComponents.Post]: PostHit,
};
