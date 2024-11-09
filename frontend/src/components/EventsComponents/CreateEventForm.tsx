import { FC, useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const formatDateTimeForInput = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().slice(0, 16); // Format: "YYYY-MM-DDThh:mm"
};

const CreateEventForm: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    location: '',
    image: null as File | null,
    requiredVolunteers: '',
    impact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      console.log('Updated form data:', newData);
      return newData;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log('Form Data Values:', {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      location: formData.location,
      category: formData.category,
      requiredVolunteers: formData.requiredVolunteers,
      impact: formData.impact,
      image: formData.image
    });

    if (!formData.title) console.log('Missing title');
    if (!formData.description) console.log('Missing description');
    if (!formData.date) console.log('Missing date');
    if (!formData.location) console.log('Missing location');
    if (!formData.category) console.log('Missing category');
    if (!formData.requiredVolunteers) console.log('Missing requiredVolunteers');
    if (!formData.impact) console.log('Missing impact');

    try {
      const submitData = new FormData();

      const formattedDate = formData.date ? new Date(formData.date).toISOString() : '';
      
      submitData.append('title', formData.title);
      submitData.append('description', formData.description);
      submitData.append('date', formattedDate);
      submitData.append('location', formData.location);
      submitData.append('category', formData.category);
      submitData.append('requiredVolunteers', formData.requiredVolunteers.toString());
      submitData.append('impact', formData.impact);
      
      if (formData.image) {
        submitData.append('image', formData.image);
      }

      console.log('FormData being sent:');
      for (let [key, value] of submitData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const response = await axios.post(
        'http://localhost:5000/api/events',
        submitData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Event created successfully:', response.data);
      navigate('/events');
      
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error details:', err.response?.data);
        setError(err.response?.data?.message || 'Failed to create event');
        if (err.response?.status === 401) {
          navigate('/login');
        }
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "cleaning",
    "education",
    "healthcare",
    "environment",
    "social",
    "other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg mb-4">
            {error}
          </div>
        )}
        
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
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400"
              rows={4}
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700">Date and Time</label>
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={(e) => {
                console.log('Date input value:', e.target.value);
                handleInputChange(e);
              }}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="group">
            <label className="block mb-1 font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter event location"
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <label className="block mb-1 font-medium text-gray-700">Required Volunteers</label>
            <input
              type="number"
              name="requiredVolunteers"
              value={formData.requiredVolunteers}
              onChange={handleInputChange}
              min="1"
              placeholder="Enter number of volunteers needed"
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="group col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Impact</label>
            <textarea
              name="impact"
              value={formData.impact}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Describe the impact of this event"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium 
            hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Creating Event...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm; 