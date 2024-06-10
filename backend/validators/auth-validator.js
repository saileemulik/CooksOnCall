const { z } = require("zod");
const loginSchema = z.object({
    email: z
    .string({required_error: "E-mail is required"}).trim().email({message: "Invalid E-mail"}).min(3, {message: "E-mail must be atleast 3 chars"})
    .max(255, {message: "E-mail must not be mores than 255 chars"}),
    password: z
    .string({required_error: "Password is required"}).trim().min(7, {message: "Passsword must be atleast 7 chars"})
    .max(1024, {message: "Name must not be mores than 1024 chars"}),
    userType: z
    .string({required_error: "User Type is required"}).trim(),   
});
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Name is required"}).trim().min(3, {message: "Name must be atleast 3 chars"})
    .max(255, {message: "Name must not be mores than 255 chars"}),   
});
const regSchema = z.object({
    user: z
    .string({required_error: "Mode of Registration is required"}).trim(),  
});
const cookSchema = z.object({
    fullName: z
    .string({required_error: "Name is required"}).trim().min(3, {message: "Name must be atleast 3 chars"})
    .max(255, {message: "Name must not be mores than 255 chars"}),   
    email: z
    .string({required_error: "E-mail is required"}).trim().email({message: "Invalid E-mail"}).min(3, {message: "E-mail must be atleast 3 chars"})
    .max(255, {message: "E-mail must not be mores than 255 chars"}),
    speciality: z
    .string({required_error: "Speciality is required"}).trim().min(3, {message: "Speciality must be atleast 3 chars"})
    .max(1024, {message: "Speciality must not be mores than 1024 chars"}),
    dish: z
    .string({required_error: "Special Dish is required"}).trim().min(3, {message: "Special Dish must be atleast 3 chars"})
    .max(1024, {message: "Special Dish must not be mores than 1024 chars"}),
    
});
const teamSchema =cookSchema.extend({
    teamName: z
    .string({required_error: "Team Name is required"}).trim().min(3, {message: "Team Name must be atleast 3 chars"})
    .max(255, {message: "Team Name must not be mores than 255 chars"}),   
});
module.exports = {signupSchema, loginSchema, cookSchema, regSchema, teamSchema};