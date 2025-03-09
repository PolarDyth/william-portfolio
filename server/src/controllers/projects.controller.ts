import { Request, Response } from "express";
import pool from "../config/db.config";
import { z } from "zod";

// Define a schema for each image in the images array
const imageSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
  description: z.string().optional(),
});

// Define a schema for each stat item
const statSchema = z.object({
  label: z.string(),
  value: z.string(),
  icon: z.any(),
});

// Define a schema for each timeline item
const timelineSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
});

// Define a schema for testimonial
const testimonialSchema = z.object({
  quote: z.string(),
  author: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string().url(),
  }),
});

// Define a schema for insights (if needed)
const insightSchema = z.object({
  title: z.string(),
  content: z.string(),
  icon: z.any(),
});

// Define the main project schema
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(imageSchema),
  skills: z.array(z.string()),
  githubLink: z.string().url(),
  liveLink: z.string().url(),
  features: z.array(z.string()),
  challenges: z.array(z.string()),
  learnings: z.array(z.string()),
  stats: z.array(statSchema).optional(),
  timeline: z.array(timelineSchema).optional(),
  testimonial: testimonialSchema.optional(),
  insights: z.array(insightSchema).optional(),
  overview: z.string(),
  process: z.string(),
});


export const getProjects = async (req: Request, res: Response) => {
  try {
    const [projects] = await pool.query("SELECT * FROM projects");
    res.json(projects);
  } catch (error) {
    res.status(500).json({error: "Error fetching all projects"});
  }
};

export const createProject = async (req: Request, res: Response) => {
  const projectData = req.body;
  if (!projectData) {
    res.status(400).json({error: "Please provide project data"});
    return;
  }

  try {

    const validatedData = projectSchema.parse(projectData);

    const [result] = await pool.query("INSERT INTO projects (data) VALUES (?)", [JSON.stringify(validatedData)]);
    res.status(201).json({message: "Project created successfully ", projectId: (result as any).insertId});
  } catch (error) {
    res.status(500).json({error: "Error creating project"});
  }
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const projectData = req.body;
  if (!id || !projectData) {
    res.status(400).json({error: "Project ID and data are required"})
    return;
  }

  try {

    const validatedData = projectSchema.parse(projectData);

    await pool.query("UPDATE projects SET data = ? WHERE id = ?", [JSON.stringify(validatedData), id]);
    res.json({message: "Project updated successfully"});
  } catch (error) {
    res.status(500).json({error: "Error updating project"});
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({error: "Project ID is required"});
    return;
  }

  try {
    await pool.query("DELETE FROM projects WHERE id = ?", [id]);
    res.json({message: "Project deleted successfully"});
  } catch (error) {
    res.status(500).json({error: "Error deleting project"});
  }
};