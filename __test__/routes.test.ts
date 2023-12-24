import request from "supertest";
import router from '../server'


describe("routes",()=>{
    test("get product list",async()=>{
        const res=await request(router).get('/posts')
        expect(res.body).toEqual({message:[Object]})
        expect(res.status).toBe(200);
    })
});

describe("routes",()=>{
    test("get product by id",async()=>{

        const res=await request(router).get('/post')
        expect(res.body).not.toBeNull();
        expect(res.status).toBe(200);
    })
})

describe("routes",()=>{
    test("delete product by id",async()=>{

        const res=await request(router).get('/posts/:id')
        expect(res.body).toEqual({ message:"post deleted successfully"});
        expect(res.status).toBe(200);
        expect(res.body).not.toBeNull();
    })
})
