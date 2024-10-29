'use client';
import Header from '@/components/Header';
import { useState } from 'react';

type FormData = {
    name: string;
    email: string;
	message: string;
	industry: string;
};

export default function ContactUs() {
	const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '', industry: '' });
	const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	  e.preventDefault();
	  const newErrors = { name: '', email: '', message: '' };
  
	  if (!formData.name) newErrors.name = 'Name is required';
	  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
	  if (!formData.message) newErrors.message = 'Message is required';
  
	  if (Object.keys(newErrors).every(key => newErrors[key as keyof typeof newErrors] === '')) {
		console.log("Form submitted", formData);
	  } else {
		setErrors(newErrors);
	  }
	};
  
	return (
		<>
		  <Header
		title="Get in Touch"
		subtitle="We’re Here to Help You Achieve Manufacturing Excellence."
		backgroundVideo='/videos/contact_bg_video.mp4'
	/>
	  <section className="w-full sm:w-2/4 lg:w-1/4 mx-auto py-16 border border-white">
		<form className="mx-auto mt-8 space-y-6 px-16 md:px-12 lg:px-8" onSubmit={handleSubmit}>
		  <div>
			<label className="block text-lg font-medium">Name</label>
			<input
			  type="text"
			  value={formData.name}
			  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
			  className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
			/>
			{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
		  </div>
  
		  <div>
			<label className="block text-lg font-medium">Email</label>
			<input
			  type="email"
			  value={formData.email}
			  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
			  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
			/>
			{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
		  </div>
  
		  <div>
			<label className="block text-lg font-medium">Message</label>
			<textarea
			  value={formData.message}
			  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
			  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded`}
			></textarea>
			{errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
		  </div>
  
		  <div>
			<label className="block text-lg font-medium">Industry</label>
			<select
			  value={formData.industry}
			  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
			  className="w-full px-4 py-2 border border-gray-300 rounded"
			>
			  <option value="">Select Industry</option>
			  <option value="Automotive">Automotive</option>
			  <option value="Pharmaceuticals">Pharmaceuticals</option>
			  <option value="Electronics">Electronics</option>
			</select>
		  </div>
  
		  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
		</form>
	  </section>
	  </>
	);
  }
