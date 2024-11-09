import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';  

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'; // Use whatever port your backend is running on

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: null as File | null,
    category: '',
    requiredVolunteers: 0,
    impact: ''
  });

  const categories = [
    "cleaning",
    "education",
    "healthcare",
    "environment",
    "social",
    "other"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'requiredVolunteers' ? parseInt(value) || 0 : value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({
        ...prevState,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('requiredVolunteers', formData.requiredVolunteers.toString());
      formDataToSend.append('impact', formData.impact);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      console.log('Sending request to:', `${API_URL}/api/events`);
      
      const response = await axios.post(`${API_URL}/api/events`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      if (response.status === 201) {
        alert('Event created successfully!');
      }
    } catch (error: any) {
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      alert('Failed to create event. Please check the console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-4">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Create New Event
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400 bg-white"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="group col-span-2">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              rows={3}
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Date</label>
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Event Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Required Volunteers</label>
            <input
              type="number"
              name="requiredVolunteers"
              value={formData.requiredVolunteers}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              min="1"
              required
            />
          </div>

          <div className="group col-span-2">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Impact</label>
            <textarea
              name="impact"
              value={formData.impact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              rows={2}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm; 