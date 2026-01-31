import { useState } from 'react';
import { Footer } from '../components/blocks';
import Button from '../components/ui/Button';

const settingsSections = [
  { id: 'account', label: 'Account' },
  { id: 'interface', label: 'Interface' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'downloads', label: 'Downloads' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'remote', label: 'Remote Play' },
  { id: 'broadcast', label: 'Broadcast' },
  { id: 'in-game', label: 'In-Game' },
  { id: 'controller', label: 'Controller' },
  { id: 'privacy', label: 'Privacy' },
];

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-bg-hover'
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
          enabled ? 'left-6' : 'left-1'
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('account');
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    autoUpdate: true,
    allowBackgroundDownloads: false,
    cloudSync: true,
    remotePlay: true,
    steamOverlay: true,
    fps: true,
    screenshotNotification: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-bg-main">
      <main className="max-w-[1200px] mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-text-main mb-6">Settings</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-56 shrink-0">
            <nav className="space-y-1">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary text-bg-main font-medium'
                      : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 bg-bg-highlight rounded-[--radius-lg] p-6">
            {activeSection === 'account' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-main">Account Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Username</div>
                      <div className="text-sm text-text-dim">Juxtopposed</div>
                    </div>
                    <Button variant="secondary" size="sm">Change</Button>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Email</div>
                      <div className="text-sm text-text-dim">jux***@email.com</div>
                    </div>
                    <Button variant="secondary" size="sm">Change</Button>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Password</div>
                      <div className="text-sm text-text-dim">Last changed 3 months ago</div>
                    </div>
                    <Button variant="secondary" size="sm">Change</Button>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Two-Factor Authentication</div>
                      <div className="text-sm text-accent-green">Enabled</div>
                    </div>
                    <Button variant="secondary" size="sm">Manage</Button>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-text-main">Steam Guard Mobile Authenticator</div>
                      <div className="text-sm text-accent-green">Active</div>
                    </div>
                    <Button variant="secondary" size="sm">Manage</Button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'interface' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-main">Interface Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Dark Mode</div>
                      <div className="text-sm text-text-dim">Use dark theme for the application</div>
                    </div>
                    <Toggle enabled={settings.darkMode} onChange={() => toggleSetting('darkMode')} />
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Language</div>
                      <div className="text-sm text-text-dim">English (US)</div>
                    </div>
                    <Button variant="secondary" size="sm">Change</Button>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-text-main">Start Steam when computer starts</div>
                      <div className="text-sm text-text-dim">Launch Steam automatically on system startup</div>
                    </div>
                    <Toggle enabled={settings.autoUpdate} onChange={() => toggleSetting('autoUpdate')} />
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-main">Privacy Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Profile Privacy</div>
                      <div className="text-sm text-text-dim">Control who can see your profile</div>
                    </div>
                    <select className="bg-bg-main border border-bg-hover rounded-[--radius-sm] px-3 py-1.5 text-sm text-text-main">
                      <option>Public</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Game Details</div>
                      <div className="text-sm text-text-dim">Control who can see your game library</div>
                    </div>
                    <select className="bg-bg-main border border-bg-hover rounded-[--radius-sm] px-3 py-1.5 text-sm text-text-main">
                      <option>Public</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Friend List</div>
                      <div className="text-sm text-text-dim">Control who can see your friends list</div>
                    </div>
                    <select className="bg-bg-main border border-bg-hover rounded-[--radius-sm] px-3 py-1.5 text-sm text-text-main">
                      <option>Public</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-text-main">Inventory</div>
                      <div className="text-sm text-text-dim">Control who can see your inventory</div>
                    </div>
                    <select className="bg-bg-main border border-bg-hover rounded-[--radius-sm] px-3 py-1.5 text-sm text-text-main">
                      <option>Public</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'in-game' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-main">In-Game Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">Enable Steam Overlay</div>
                      <div className="text-sm text-text-dim">Access Steam features while in-game</div>
                    </div>
                    <Toggle enabled={settings.steamOverlay} onChange={() => toggleSetting('steamOverlay')} />
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-bg-hover">
                    <div>
                      <div className="text-sm font-medium text-text-main">In-Game FPS Counter</div>
                      <div className="text-sm text-text-dim">Show FPS counter while playing</div>
                    </div>
                    <Toggle enabled={settings.fps} onChange={() => toggleSetting('fps')} />
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-text-main">Screenshot Notification</div>
                      <div className="text-sm text-text-dim">Show notification when screenshot is taken</div>
                    </div>
                    <Toggle enabled={settings.screenshotNotification} onChange={() => toggleSetting('screenshotNotification')} />
                  </div>
                </div>
              </div>
            )}

            {/* Default content for other sections */}
            {!['account', 'interface', 'privacy', 'in-game'].includes(activeSection) && (
              <div className="text-center py-12 text-text-dim">
                <p>Settings for {settingsSections.find(s => s.id === activeSection)?.label}</p>
                <p className="text-sm mt-2">Configure your preferences here</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
