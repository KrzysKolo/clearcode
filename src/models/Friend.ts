export enum Status {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED"
}

export interface Friend {
  id: string;
  firstName: string;
  lastName: string;
  status: Status;
  photoUrl: string;
}

export type FriendProps = {
  friend: Friend;
  accept?: React.MouseEventHandler<HTMLElement> | any;
  remove?: React.MouseEventHandler<HTMLElement> | any;
}