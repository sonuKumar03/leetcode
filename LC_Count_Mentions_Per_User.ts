/**
 * LC -https://leetcode.com/contest/weekly-contest-434/problems/count-mentions-per-user/
 */

type EventType = "MESSAGE" | "OFFLINE";
class User {
  #offflineTimeStamp: number;
  #mentions: number;
  #id: string;
  constructor(id: string, timestamp = 0) {
    this.#id = id;
    this.#offflineTimeStamp = timestamp; //mean online
    this.#mentions = 0;
  }
  public isOnline(timestamp: number) {
    if (this.#offflineTimeStamp < 1) {
      return true;
    }
    return this.#offflineTimeStamp + 60 < timestamp;
  }
}

class Message {
  #type: EventType;
  #timestamp: number;
  #isAllOnlineUserMentioned: boolean;
  #isAllUserMentioned: boolean; // online + offline
  #users: User[];
  constructor(
    type: EventType,
    ids: string[],
    timestamp: number,
    userCount: number,
    mentions: string[]
  ) {
    this.#type = type;
    this.#timestamp = timestamp;
    this.#users = [];

    for (let i = 0; i < userCount; i++) {
      this.#users.push(new User(ids[i], timestamp));
    }
  }
}

function countMentions(numberOfUsers: number, events: string[][]): number[] {}

// 2
// [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]
// 2
// [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]
// 2
// [["OFFLINE","10","0"],["MESSAGE","12","HERE"]
