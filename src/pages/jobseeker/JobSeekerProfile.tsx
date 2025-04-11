import React, { useState } from "react";
import {
  User,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Globe,
  Plus,
  Edit,
  Check,
  Trash,
  Award,
  Book,
  ChevronDown,
} from "lucide-react";

// Define a type for section names
type SectionName = "experience" | "education" | "projects";

export default function JobSeekerProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    website: "alexjohnson.dev",
    bio: "Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Specialized in React, Vue, and modern JavaScript frameworks.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS/SCSS",
      "UI/UX Design",
      "Responsive Design",
      "Node.js",
      "GraphQL",
      "Tailwind CSS",
      "Webpack",
    ],
    experience: [
      {
        id: 1,
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        period: "Jan 2023 - Present",
        description:
          "Lead frontend development for enterprise SaaS platform. Improved performance by 40% and implemented new design system.",
      },
      {
        id: 2,
        role: "Frontend Developer",
        company: "Digital Solutions Agency",
        period: "Mar 2020 - Dec 2022",
        description:
          "Developed responsive web applications for clients across finance, healthcare, and e-commerce sectors.",
      },
      {
        id: 3,
        role: "UI Developer",
        company: "StartUp Innovations",
        period: "Jun 2018 - Feb 2020",
        description:
          "Built and maintained company website and product interfaces focusing on accessibility and user experience.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "B.S. Computer Science",
        institution: "University of California, Berkeley",
        period: "2014 - 2018",
      },
      {
        id: 2,
        degree: "Web Development Certification",
        institution: "Fullstack Academy",
        period: "2018",
      },
    ],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform",
        description:
          "Built a full-featured e-commerce platform with React, Node.js and MongoDB",
        link: "github.com/alexj/ecommerce",
      },
      {
        id: 2,
        name: "Health Tracking App",
        description:
          "Mobile-first PWA for fitness tracking with data visualization",
        link: "github.com/alexj/health-track",
      },
    ],
  });

  const [newSkill, setNewSkill] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    experience: true,
    education: true,
    projects: true,
  });

  const handleAddSkill = () => {
    if (newSkill.trim() !== "" && !profileData.skills.includes(newSkill)) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const toggleSection = (section: SectionName) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handleSaveProfile = () => {
    // Here you would typically save the profile data to a server
    setEditMode(false);
  };


  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <button
          onClick={() => (editMode ? handleSaveProfile() : setEditMode(true))}
          className={`px-4 py-2 rounded-md flex items-center ${
            editMode
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {editMode ? (
            <>
              <Check size={18} className="mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit size={18} className="mr-2" />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Header */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute -bottom-16 left-8">
            <div className="bg-white p-1 rounded-full shadow-lg">
              <div className="bg-gray-200 rounded-full h-32 w-32 flex items-center justify-center">
                <User size={64} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="pt-20 pb-8 px-8">
          <div className="mb-6">
            {editMode ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={profileData.title}
                    onChange={(e) =>
                      setProfileData({ ...profileData, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={profileData.location}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800">
                  {profileData.name}
                </h2>
                <div className="text-lg text-gray-600 mt-1">
                  {profileData.title}
                </div>
                <div className="flex items-center text-gray-500 mt-2">
                  <MapPin size={16} className="mr-1" />
                  {profileData.location}
                </div>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <Mail size={16} className="text-gray-400 mr-2" />
              {editMode ? (
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                />
              ) : (
                <span className="text-gray-700">{profileData.email}</span>
              )}
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-gray-400 mr-2" />
              {editMode ? (
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                />
              ) : (
                <span className="text-gray-700">{profileData.phone}</span>
              )}
            </div>
            <div className="flex items-center">
              <Globe size={16} className="text-gray-400 mr-2" />
              {editMode ? (
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={profileData.website}
                  onChange={(e) =>
                    setProfileData({ ...profileData, website: e.target.value })
                  }
                />
              ) : (
                <a
                  href={`https://${profileData.website}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profileData.website}
                </a>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              About Me
            </h3>
            {editMode ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={4}
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
              ></textarea>
            ) : (
              <p className="text-gray-700">{profileData.bio}</p>
            )}
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center ${
                    editMode ? "pr-1" : ""
                  }`}
                >
                  {skill}
                  {editMode && (
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-1 text-blue-700 hover:text-blue-900"
                    >
                      <Trash size={14} />
                    </button>
                  )}
                </div>
              ))}

              {editMode && (
                <div className="flex items-center">
                  <input
                    type="text"
                    className="p-1 border border-gray-300 rounded-l-md text-sm w-32"
                    placeholder="Add skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                  />
                  <button
                    onClick={handleAddSkill}
                    className="bg-blue-600 text-white p-1 rounded-r-md hover:bg-blue-700 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Experience
              </h3>
              <button
                onClick={() => toggleSection("experience")}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    expandedSections.experience ? "" : "rotate-180"
                  }`}
                />
              </button>
            </div>

            {expandedSections.experience && (
              <div className="space-y-6">
                {profileData.experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                    {editMode ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={exp.role}
                          onChange={(e) => {
                            const updatedExp = profileData.experience.map(
                              (item) =>
                                item.id === exp.id
                                  ? { ...item, role: e.target.value }
                                  : item
                            );
                            setProfileData({
                              ...profileData,
                              experience: updatedExp,
                            });
                          }}
                        />
                        <div className="flex gap-2">
                          <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            value={exp.company}
                            onChange={(e) => {
                              const updatedExp = profileData.experience.map(
                                (item) =>
                                  item.id === exp.id
                                    ? { ...item, company: e.target.value }
                                    : item
                              );
                              setProfileData({
                                ...profileData,
                                experience: updatedExp,
                              });
                            }}
                          />
                          <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            value={exp.period}
                            onChange={(e) => {
                              const updatedExp = profileData.experience.map(
                                (item) =>
                                  item.id === exp.id
                                    ? { ...item, period: e.target.value }
                                    : item
                              );
                              setProfileData({
                                ...profileData,
                                experience: updatedExp,
                              });
                            }}
                          />
                        </div>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={2}
                          value={exp.description}
                          onChange={(e) => {
                            const updatedExp = profileData.experience.map(
                              (item) =>
                                item.id === exp.id
                                  ? { ...item, description: e.target.value }
                                  : item
                            );
                            setProfileData({
                              ...profileData,
                              experience: updatedExp,
                            });
                          }}
                        ></textarea>
                        <button
                          className="text-red-600 hover:text-red-800 text-sm flex items-center"
                          onClick={() => {
                            const updatedExp = profileData.experience.filter(
                              (item) => item.id !== exp.id
                            );
                            setProfileData({
                              ...profileData,
                              experience: updatedExp,
                            });
                          }}
                        >
                          <Trash size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center">
                          <Briefcase size={16} className="text-gray-400 mr-2" />
                          <h4 className="font-semibold text-gray-800">
                            {exp.role}
                          </h4>
                        </div>
                        <div className="ml-6 text-sm text-gray-600 mb-1">
                          {exp.company} • {exp.period}
                        </div>
                        <p className="ml-6 text-gray-700">{exp.description}</p>
                      </>
                    )}
                  </div>
                ))}

                {editMode && (
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
                    onClick={() => {
                      const newId =
                        Math.max(
                          ...profileData.experience.map((item) => item.id),
                          0
                        ) + 1;
                      setProfileData({
                        ...profileData,
                        experience: [
                          ...profileData.experience,
                          {
                            id: newId,
                            role: "New Position",
                            company: "Company Name",
                            period: "Start - End",
                            description:
                              "Description of your role and achievements",
                          },
                        ],
                      });
                    }}
                  >
                    <Plus size={16} className="mr-1" />
                    Add Experience
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Education */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Education</h3>
              <button
                onClick={() => toggleSection("education")}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    expandedSections.education ? "" : "rotate-180"
                  }`}
                />
              </button>
            </div>

            {expandedSections.education && (
              <div className="space-y-4">
                {profileData.education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-gray-200 pl-4">
                    {editMode ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={edu.degree}
                          onChange={(e) => {
                            const updatedEdu = profileData.education.map(
                              (item) =>
                                item.id === edu.id
                                  ? { ...item, degree: e.target.value }
                                  : item
                            );
                            setProfileData({
                              ...profileData,
                              education: updatedEdu,
                            });
                          }}
                        />
                        <div className="flex gap-2">
                          <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            value={edu.institution}
                            onChange={(e) => {
                              const updatedEdu = profileData.education.map(
                                (item) =>
                                  item.id === edu.id
                                    ? { ...item, institution: e.target.value }
                                    : item
                              );
                              setProfileData({
                                ...profileData,
                                education: updatedEdu,
                              });
                            }}
                          />
                          <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                            value={edu.period}
                            onChange={(e) => {
                              const updatedEdu = profileData.education.map(
                                (item) =>
                                  item.id === edu.id
                                    ? { ...item, period: e.target.value }
                                    : item
                              );
                              setProfileData({
                                ...profileData,
                                education: updatedEdu,
                              });
                            }}
                          />
                        </div>
                        <button
                          className="text-red-600 hover:text-red-800 text-sm flex items-center"
                          onClick={() => {
                            const updatedEdu = profileData.education.filter(
                              (item) => item.id !== edu.id
                            );
                            setProfileData({
                              ...profileData,
                              education: updatedEdu,
                            });
                          }}
                        >
                          <Trash size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center">
                          <Book size={16} className="text-gray-400 mr-2" />
                          <h4 className="font-semibold text-gray-800">
                            {edu.degree}
                          </h4>
                        </div>
                        <div className="ml-6 text-sm text-gray-600">
                          {edu.institution} • {edu.period}
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {editMode && (
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
                    onClick={() => {
                      const newId =
                        Math.max(
                          ...profileData.education.map((item) => item.id),
                          0
                        ) + 1;
                      setProfileData({
                        ...profileData,
                        education: [
                          ...profileData.education,
                          {
                            id: newId,
                            degree: "Degree/Certification",
                            institution: "Institution Name",
                            period: "Year - Year",
                          },
                        ],
                      });
                    }}
                  >
                    <Plus size={16} className="mr-1" />
                    Add Education
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Projects */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
              <button
                onClick={() => toggleSection("projects")}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    expandedSections.projects ? "" : "rotate-180"
                  }`}
                />
              </button>
            </div>

            {expandedSections.projects && (
              <div className="space-y-4">
                {profileData.projects.map((project) => (
                  <div
                    key={project.id}
                    className="border-l-2 border-gray-200 pl-4"
                  >
                    {editMode ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={project.name}
                          onChange={(e) => {
                            const updatedProjects = profileData.projects.map(
                              (item) =>
                                item.id === project.id
                                  ? { ...item, name: e.target.value }
                                  : item
                            );
                            setProfileData({
                              ...profileData,
                              projects: updatedProjects,
                            });
                          }}
                        />
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={2}
                          value={project.description}
                          onChange={(e) => {
                            const updatedProjects = profileData.projects.map(
                              (item) =>
                                item.id === project.id
                                  ? { ...item, description: e.target.value }
                                  : item
                            );
                            setProfileData({
                              ...profileData,
                              projects: updatedProjects,
                            });
                          }}
                        ></textarea>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Project Link"
                          value={project.link}
                          onChange={(e) => {
                            const updatedProjects = profileData.projects.map(
                              (item) =>
                                item.id === project.id
                                  ? { ...item, link: e.target.value }
                                  : item
                            );
                            setProfileData({
                              ...profileData,
                              projects: updatedProjects,
                            });
                          }}
                        />
                        <button
                          className="text-red-600 hover:text-red-800 text-sm flex items-center"
                          onClick={() => {
                            const updatedProjects = profileData.projects.filter(
                              (item) => item.id !== project.id
                            );
                            setProfileData({
                              ...profileData,
                              projects: updatedProjects,
                            });
                          }}
                        >
                          <Trash size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center">
                          <Award size={16} className="text-gray-400 mr-2" />
                          <h4 className="font-semibold text-gray-800">
                            {project.name}
                          </h4>
                        </div>
                        <p className="ml-6 text-gray-700 mb-1">
                          {project.description}
                        </p>
                        <div className="ml-6">
                          <a
                            href={`https://${project.link}`}
                            className="text-blue-600 hover:underline text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.link}
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {editMode && (
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
                    onClick={() => {
                      const newId =
                        Math.max(
                          ...profileData.projects.map((item) => item.id),
                          0
                        ) + 1;
                      setProfileData({
                        ...profileData,
                        projects: [
                          ...profileData.projects,
                          {
                            id: newId,
                            name: "Project Name",
                            description: "Description of the project",
                            link: "project-link.com",
                          },
                        ],
                      });
                    }}
                  >
                    <Plus size={16} className="mr-1" />
                    Add Project
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
