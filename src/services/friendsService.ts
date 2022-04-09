import friends from "../dataFixtures/friends";
import { Friend } from "../models/Friend";

export default {
  getList: (): Promise<Friend[]> => Promise.resolve(friends)
};
