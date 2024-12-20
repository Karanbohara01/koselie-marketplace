import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const CategoryList = () => {
  const [category, setCategory] = useState([]); // State for categories
  const [editingCategory, setEditingCategory] = useState(null); // Track category being edited
  const [categoryName, setCategoryName] = useState(""); // Input field for category name
  const [loading, setLoading] = useState(false); // Loading state for actions

  // Fetch categories when component mounts
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/categorylist`)
      .then((res) => {
        setCategory(res.data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Error fetching categories!"); // Show error toast
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Handle delete category
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmDelete) {
      setLoading(true); // Set loading to true during deletion
      axios
        .delete(`/api/deletecategory/${id}`)
        .then((res) => {
          if (res.data.message === "Category deleted successfully") {
            setCategory((prevCategory) =>
              prevCategory.filter((cat) => cat._id !== id)
            );
            toast.success("Category deleted successfully!"); // Show success toast
          }
          setLoading(false); // Set loading to false after deletion
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Error deleting category!"); // Show error toast
          console.error("Error deleting category:", error);
        });
    }
  };

  // Handle category update
  const handleUpdate = async (id) => {
    // Validate category name
    if (!categoryName.trim()) {
      toast.error("Category name cannot be empty."); // Show error toast
      return;
    }

    try {
      // Set loading state to true during the update process
      setLoading(true);

      // Send the update request to the server
      const response = await axios.put(`/api/updatecategory/${id}`, {
        category_name: categoryName,
      });

      // Check if the update was successful
      if (response.data.message === "Category updated successfully") {
        // Update the category in the state
        setCategory((prevCategory) =>
          prevCategory.map((cat) =>
            cat._id === id ? { ...cat, category_name: categoryName } : cat
          )
        );

        // Show success toast
        toast.success("Category updated successfully!");

        // Reset the editing state and clear the input
        setEditingCategory(null);
        setCategoryName("");
      } else {
        // Handle case where update fails but no error occurs
        toast.error("Failed to update category. Please try again.");
      }
    } catch (error) {
      // Handle any errors during the request
      toast.error("Error updating category!"); // Show error toast
      console.error("Error updating category:", error);
    } finally {
      // Set loading state to false after the request completes
      setLoading(false);
    }
  };

  // Handle input changes for category name
  const handleInputChange = (e) => {
    setCategoryName(e.target.value.trim());
  };

  return (
    <>
      {/* Toast container for global toast notifications */}
      <ToastContainer position="top-right" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-red-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="2" className="text-center px-6 py-4">
                  <span className="text-green-500">Loading...</span>
                </td>
              </tr>
            ) : category.length > 0 ? (
              category.map((data) => (
                <tr
                  key={data._id} // Use _id for a unique key
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {editingCategory === data._id ? (
                      <input
                        type="text"
                        placeholder="Edit category name"
                        value={categoryName}
                        onChange={handleInputChange}
                        className="px-4 py-2 border rounded text-black"
                      />
                    ) : (
                      data.category_name
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingCategory === data._id ? (
                      <button
                        onClick={() => handleUpdate(data._id)} // Call the update function
                        className="text-sm text-blue-600 hover:underline dark:text-blue-400 mr-2"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingCategory(data._id)} // Edit category
                        className="text-sm text-black hover:underline dark:text-red-400 mr-2"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(data._id)} // Call the delete function
                      className="text-sm text-red-600 hover:underline dark:text-red-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center px-6 py-4">
                  No categories available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryList;
