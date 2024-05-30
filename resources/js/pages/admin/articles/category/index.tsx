import AdminLayout from "resources/js/Layouts/AdminLayout";

import Topic from "resources/js/components/molecules/Topic/Topic";

import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import { useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "resources/js/components/atoms/Button/Button";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import htmlToDraft from "html-to-draftjs";
import { parseDate } from "resources/js/lib/utils";
import { Inertia } from "@inertiajs/inertia";
import Input from "resources/js/components/molecules/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { Link } from "react-router-dom";

interface Category {
    id: number;
    name: string;
}

const CategoryManagement: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategoryName, setNewCategoryName] = useState<string>('');
    const [editCategoryName, setEditCategoryName] = useState<string>('');
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get<Category[]>('/api/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleAddCategory = async () => {
        if (!newCategoryName.trim()) return;
        try {
            await axios.post('/api/categories', { name: newCategoryName });
            setNewCategoryName('');
            fetchCategories();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };
  
    const handleEditCategory = async (id: number) => {
        try {
            await axios.put(`/api/categories/${id}`, { name: editCategoryName });
            setEditingCategoryId(null);
            setEditCategoryName('');
            fetchCategories();
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    const handleDeleteCategory = async (id: number) => {
        try {
            await axios.delete(`/api/categories/${id}`);
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <div>
            <h2>Category Management</h2>
            <div>
                <input 
                    type="text" 
                    value={newCategoryName} 
                    onChange={(e) => setNewCategoryName(e.target.value)} 
                    placeholder="Enter new category name" 
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>
                                {editingCategoryId === category.id ? (
                                    <input 
                                        type="text" 
                                        value={editCategoryName} 
                                        onChange={(e) => setEditCategoryName(e.target.value)} 
                                    />
                                ) : (
                                    category.name
                                )}
                            </td>
                            <td>
                                {editingCategoryId === category.id ? (
                                    <button onClick={() => handleEditCategory(category.id)}>Save</button>
                                ) : (
                                    <div>
                                        <button onClick={() => {setEditingCategoryId(category.id); setEditCategoryName(category.name);}}>Edit</button>
                                        <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};