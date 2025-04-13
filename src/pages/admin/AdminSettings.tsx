import { useState } from "react";
import { FiSave, FiLock, FiMail, FiBell } from "react-icons/fi";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "CareerConnect Pro",
    adminEmail: "admin@careerconnect.com",
    registrationOpen: true,
    maintenanceMode: false,
    emailNotifications: true,
    pushNotifications: false,
    defaultUserRole: "jobseeker",
    currency: "USD",
    timezone: "UTC",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save settings logic
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600 mt-2">
            Configure platform-wide settings and preferences
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="siteName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Site Name
                  </label>
                  <input
                    type="text"
                    id="siteName"
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="adminEmail"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Admin Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="adminEmail"
                      name="adminEmail"
                      value={settings.adminEmail}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="defaultUserRole"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Default User Role
                  </label>
                  <select
                    id="defaultUserRole"
                    name="defaultUserRole"
                    value={settings.defaultUserRole}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="jobseeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="currency"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="timezone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Timezone
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={settings.timezone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">Eastern Time (EST)</option>
                    <option value="PST">Pacific Time (PST)</option>
                    <option value="CET">Central European Time (CET)</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <FiLock className="mr-2 text-indigo-600" />
                  Security Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="registrationOpen"
                      name="registrationOpen"
                      checked={settings.registrationOpen}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="registrationOpen"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Allow new user registrations
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="maintenanceMode"
                      name="maintenanceMode"
                      checked={settings.maintenanceMode}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="maintenanceMode"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Maintenance mode (restricts access to admins only)
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <FiBell className="mr-2 text-indigo-600" />
                  Notification Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="emailNotifications"
                      name="emailNotifications"
                      checked={settings.emailNotifications}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="emailNotifications"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Enable email notifications
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pushNotifications"
                      name="pushNotifications"
                      checked={settings.pushNotifications}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="pushNotifications"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Enable push notifications
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all flex items-center space-x-2"
              >
                <FiSave className="h-5 w-5" />
                <span>Save Settings</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
