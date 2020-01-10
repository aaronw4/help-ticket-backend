const server = require("../../api/server");
const db = require("../../config/dbConfig");
const request = require("supertest");

describe('Test endpoint: "/api/ticket"', () => {
  // beforeAll(async () => {
  //   await db("tickets").truncate();
  // });

  let token = "asdfdsafsdf";

  beforeAll(async done => {
    await db("roles").truncate();
    await db("users").truncate();
    await db("tickets").truncate();
    await db("users_roles").truncate();
    await db("roles").insert({ role: "student" });

    await request(server)
      .post("/api/user/register")
      .send({ username: "test", password: "pass" });

    request(server)
      .post("/api/user/login")
      .send({ username: "test", password: "pass" })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });

  // test("Register", async () => {
  //   const res = await request(server)
  //     .post("/api/user/register")
  //     .send({ username: "test", password: "pass" });
  //   expect(1).toBe(1);
  // });

  // test("Login", async done => {
  //   request(server)
  //     .post("/api/user/login")
  //     .send({ username: "test", password: "pass" })
  //     .end((err, response) => {
  //       token = response.body.token;
  //       done();
  //     });
  //   expect(res.status).toBe(200);
  // });

  test('GET endpoint: "/ticket" should give status code 401 when token is not provided', async () => {
    const res = await request(server).get("/api/ticket/");
    expect(res.status).toBe(401);
  });

  test('GET endpoint: "/ticket" should give application/json on successful get request', async () => {
    const res = await request(server)
      .get("/api/ticket/")
      .set("Authorization", token);
    expect(res.status).toBe(200);
  });

  test('POST endpoint: "/ticket" should give status code 200 on successfull addition of ticket', async () => {
    const res = await request(server)
      .post("/api/ticket/")
      .send({
        title: "new test again again",
        description: "new",
        attempted: "new",
        category: "new",
        userId: 1
      })
      .set("Authorization", token);
    expect(res.status).toBe(200);
  });

  test('POST endpoint: "/ticket" should give status code 500 when userId is missing from body of request', async () => {
    const res = await request(server)
      .post("/api/ticket/")
      .send({
        title: "new test again again",
        description: "new",
        attempted: "new",
        category: "new"
      })
      .set("Authorization", token);
    expect(res.status).toBe(500);
  });

  test('PUT endpoint: "/ticket/assign" should give status code 200 when ticket is successfully assigned to user', async () => {
    const res = await request(server)
      .put("/api/ticket/assign")
      .send({
        userId: 1,
        ticketId: 1
      })
      .set("Authorization", token);
    expect(res.status).toBe(200);
  });

  test('PUT endpoint: "/ticket/assign" should give status code 404 when ticket is posted with wrong endpoint', async () => {
    const res = await request(server)
      .post("/api/ticket/assign")
      .send({
        userId: 1,
        ticketId: 1
      })
      .set("Authorization", token);
    expect(res.status).toBe(404);
  });

  test('PUT endpoint: "/ticket/unassign" should give status code 200 when ticket is successfully unassigned from user', async () => {
    await request(server)
      .put("/api/ticket/assign")
      .send({
        userId: 1,
        ticketId: 1
      })
      .set("Authorization", token);

    const res = await request(server)
      .put("/api/ticket/unassign")
      .send({
        ticketId: 1
      })
      .set("Authorization", token);
    expect(res.status).toBe(200);
  });

  test('PUT endpoint: "/ticket/unassign" should give status code 409 when ticket is already unassigned', async () => {
    const res = await request(server)
      .put("/api/ticket/unassign")
      .send({
        ticketId: 1
      })
      .set("Authorization", token);
    expect(res.status).toBe(409);
  });

  test('PUT endpoint: "/ticket/resolved" should give status code 200 when ticket resolved value changes', async () => {
    const res = await request(server)
      .put("/api/ticket/resolved")
      .send({
        ticketId: 1
      })
      .set("Authorization", token);
    expect(res.status).toBe(200);
  });

  test('PUT endpoint: "/ticket/resolved" should give status code 500 when ticket does not exist', async () => {
    const res = await request(server)
      .put("/api/ticket/resolved")
      .send({
        ticketId: 2
      })
      .set("Authorization", token);
    expect(res.status).toBe(500);
  });
});
