import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser: IUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ user: newUser });
    } catch (error: any) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err: any) => err.message);
            res.status(400).json({ error: 'Validation Error', details: validationErrors });
        } else if (error.code === 11000) {
            res.status(400).json({ error: 'Duplicate key violation' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedUser: IUser | null = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedUser: any | null = await User.findByIdAndDelete(id);
        res.status(200).json({ user: deletedUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};