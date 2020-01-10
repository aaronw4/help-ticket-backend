const server = require("../api/server");
const db = require("../config/dbConfig");
const request = require("supertest");

describe('Test endpoint: "/api/user"', () => {
  // beforeAll(async () => {
  //   await db("tickets").truncate();
  // });

  beforeAll(async () => {
    await db("roles").truncate();
    await db("users_roles").truncate();
    await db("roles").insert({ role: "student" });
    await db("users").truncate();
  });

  test('POST endpoint: "/register" should give status code 200 when user is added to database', async () => {
    const res = await request(server)
      .post("/api/user/register")
      .send({
        username: "username",
        password: "pass"
      });
    expect(res.status).toBe(200);
  });

  test('POST endpoint: "/register" should give status code 500 when user is already in database', async () => {
    const res = await request(server)
      .post("/api/user/register")
      .send({
        username: "username",
        password: "pass"
      });
    expect(res.status).toBe(500);
  });

  test('POST endpoint: "/login" should give status code 200 when user is added to database', async () => {
    const res = await request(server)
      .post("/api/user/login")
      .send({
        username: "test",
        password: "pass"
      });
    expect(res.status).toBe(200);
  });

  test('POST endpoint: "/login" should give status code 500 if user does not exist in database', async () => {
    const res = await request(server)
      .post("/api/user/login")
      .send({
        username: "nope",
        password: "pass"
      });
    expect(res.status).toBe(403);
  });
});
