import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Image, Video, Play, Download, Eye } from 'lucide-react';

const Media = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'images';
  const [activeTab, setActiveTab] = useState(initialTab);

  const images = [
    {
      id: 1,
      title: 'Modern Dental Clinic Interior',
      description: 'State-of-the-art dental facility with comfortable patient areas',
      url: 'https://images.pexels.com/photos/4269291/pexels-photo-4269291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Clinic'
    },
    {
      id: 2,
      title: 'Advanced Dental Equipment',
      description: 'Latest technology for precise and comfortable treatments',
      url: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Equipment'
    },
    {
      id: 3,
      title: 'Dental Implant Procedure',
      description: 'Professional dental implant treatment in progress',
      url: 'https://images.pexels.com/photos/6812589/pexels-photo-6812589.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Treatment'
    },
    {
      id: 4,
      title: 'Pediatric Dental Care',
      description: 'Child-friendly environment for young patients',
      url: 'https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Pediatric'
    },
    {
      id: 5,
      title: 'Cosmetic Dentistry Results',
      description: 'Before and after smile transformation',
      url: 'https://images.pexels.com/photos/6812571/pexels-photo-6812571.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Cosmetic'
    },
    {
      id: 6,
      title: 'Orthodontic Treatment',
      description: 'Modern orthodontic solutions for perfect alignment',
      url: 'https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Orthodontics'
    },
    {
      id: 7,
      title: 'Dental Team at Work',
      description: 'Our experienced dental professionals providing care',
      url: 'https://images.pexels.com/photos/6812548/pexels-photo-6812548.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Team'
    },
    {
      id: 8,
      title: 'Patient Consultation',
      description: 'Comprehensive dental examination and consultation',
      url: 'https://images.pexels.com/photos/6723523/pexels-photo-6723523.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Consultation'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Dental Implant Procedure Overview',
      description: 'Complete walkthrough of our dental implant process',
      thumbnail: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5:30',
      category: 'Treatment'
    },
    {
      id: 2,
      title: 'Patient Testimonial - Smile Transformation',
      description: 'Real patient shares their experience with cosmetic dentistry',
      thumbnail: 'https://images.pexels.com/photos/6812571/pexels-photo-6812571.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:45',
      category: 'Testimonial'
    },
    {
      id: 3,
      title: 'Proper Brushing Technique',
      description: 'Educational video on correct oral hygiene practices',
      thumbnail: 'https://images.pexels.com/photos/6812589/pexels-photo-6812589.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:15',
      category: 'Education'
    },
    {
      id: 4,
      title: 'Clinic Tour - Hyderabad Kukatpally',
      description: 'Virtual tour of our state-of-the-art facility',
      thumbnail: 'https://images.pexels.com/photos/4269291/pexels-photo-4269291.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4:20',
      category: 'Clinic Tour'
    },
    {
      id: 5,
      title: 'Root Canal Treatment Explained',
      description: 'Demystifying root canal procedure with expert explanation',
      thumbnail: 'https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6:10',
      category: 'Education'
    },
    {
      id: 6,
      title: 'Children\'s Dental Care Tips',
      description: 'Guide for parents on maintaining children\'s oral health',
      thumbnail: 'https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4:55',
      category: 'Pediatric'
    }
  ];

  const imageCategories = ['All', 'Clinic', 'Equipment', 'Treatment', 'Pediatric', 'Cosmetic', 'Orthodontics', 'Team', 'Consultation'];
  const videoCategories = ['All', 'Treatment', 'Testimonial', 'Education', 'Clinic Tour', 'Pediatric'];

  const [selectedImageCategory, setSelectedImageCategory] = useState('All');
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('All');

  const filteredImages = selectedImageCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedImageCategory);

  const filteredVideos = selectedVideoCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedVideoCategory);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-6">
            Media <span className="">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of images and videos showcasing our state-of-the-art facilities, 
            advanced treatments, and patient success stories.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'images'
                  ? 'bg-gradient-to-r from-blue-500 to-blue--500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Image className="w-5 h-5" />
              <span>Images</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-blue-500 to-blue--500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>Videos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Images Tab */}
      {activeTab === 'images' && (
        <>
          {/* Image Category Filter */}
          <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {imageCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedImageCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedImageCategory === category
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Images Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover-scale border border-gray-100 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors duration-200">
                            <Eye className="w-5 h-5 text-gray-700" />
                          </button>
                          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors duration-200">
                            <Download className="w-5 h-5 text-gray-700" />
                          </button>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <>
          {/* Video Category Filter */}
          <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {videoCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedVideoCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedVideoCategory === category
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Videos Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-scale border border-gray-100 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-blue-500 to-blue--500 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue--500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {video.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}


 
    </div>
  );
};

export default Media;