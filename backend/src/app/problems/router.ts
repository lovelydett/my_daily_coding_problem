import Router from "koa-router";

const router = new Router();

interface Problem {
  id: number;
  title: string;
  description: string;
  detailLink: string;
}

router.get("/:date", async (ctx) => {
  const date: string = ctx.params.date;
  console.log(date);
});

// Implement a route function to get a list of problems
router.get("/", async (ctx) => {
  const problems: Problem[] = [
    {
      id: 1,
      title: "Two Sum",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      detailLink: "https://leetcode.com/problems/two-sum/",
    },
    {
      id: 2,
      title: "Add Two Numbers",
      description:
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
      detailLink: "https://leetcode.com/problems/add-two-numbers/",
    },
  ];
  ctx.body = problems;
});

export { router };
