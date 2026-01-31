import { Footer, LibrarySidebar } from '../components/blocks';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

interface Download {
  id: string;
  title: string;
  image: string;
  progress: number;
  size: string;
  downloaded: string;
  speed?: string;
  eta?: string;
  status: 'downloading' | 'paused' | 'queued' | 'completed';
}

const downloads: Download[] = [
  {
    id: '1',
    title: 'Elden Ring',
    image: './assets/images/elden-ring.jpg',
    progress: 67,
    size: '60 GB',
    downloaded: '40.2 GB',
    speed: '25.5 MB/s',
    eta: '13 min',
    status: 'downloading',
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: './assets/images/cyberpunk.jpg',
    progress: 0,
    size: '70 GB',
    downloaded: '0 GB',
    status: 'queued',
  },
  {
    id: '3',
    title: 'Starfield',
    image: './assets/images/starfield.jpg',
    progress: 0,
    size: '125 GB',
    downloaded: '0 GB',
    status: 'queued',
  },
];

const completedDownloads: Download[] = [
  {
    id: '4',
    title: 'DOOM Eternal',
    image: './assets/images/doom.jpg',
    progress: 100,
    size: '45 GB',
    downloaded: '45 GB',
    status: 'completed',
  },
  {
    id: '5',
    title: 'Borderlands 2',
    image: './assets/images/borderlands2.jpg',
    progress: 100,
    size: '20 GB',
    downloaded: '20 GB',
    status: 'completed',
  },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-bg-main flex">
      <LibrarySidebar />

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-bold text-text-main mb-6">Downloads</h1>

          {/* Active Downloads */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-text-main">Active Downloads</h2>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm">Pause All</Button>
                <Button variant="secondary" size="sm">Clear Completed</Button>
              </div>
            </div>

            <div className="space-y-3">
              {downloads.map((download) => (
                <div
                  key={download.id}
                  className="bg-bg-highlight rounded-[--radius-lg] p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={download.image}
                      alt={download.title}
                      className="w-24 h-12 object-cover rounded-[--radius-sm]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-medium text-text-main">{download.title}</h3>
                        <div className="flex items-center gap-2">
                          {download.status === 'downloading' && (
                            <>
                              <Badge variant="primary">{download.speed}</Badge>
                              <span className="text-sm text-text-dim">ETA: {download.eta}</span>
                            </>
                          )}
                          {download.status === 'queued' && (
                            <Badge variant="default">Queued</Badge>
                          )}
                          {download.status === 'paused' && (
                            <Badge variant="warning">Paused</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="h-2 bg-bg-main rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-300 ${
                                download.status === 'downloading' ? 'bg-primary' :
                                download.status === 'queued' ? 'bg-text-dim' : 'bg-accent-yellow'
                              }`}
                              style={{ width: `${download.progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm text-text-dim min-w-[80px] text-right">
                          {download.downloaded} / {download.size}
                        </span>
                        <span className="text-sm text-text-main font-medium min-w-[40px] text-right">
                          {download.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {download.status === 'downloading' ? (
                        <Button variant="ghost" size="sm">
                          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="4" y="3" width="3" height="10" rx="1"/>
                            <rect x="9" y="3" width="3" height="10" rx="1"/>
                          </svg>
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm">
                          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 3v10l9-5-9-5z"/>
                          </svg>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4l8 8M12 4l-8 8"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Downloads */}
          <div>
            <h2 className="text-lg font-semibold text-text-main mb-4">Recently Completed</h2>
            <div className="space-y-3">
              {completedDownloads.map((download) => (
                <div
                  key={download.id}
                  className="bg-bg-highlight rounded-[--radius-lg] p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={download.image}
                      alt={download.title}
                      className="w-24 h-12 object-cover rounded-[--radius-sm]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-text-main">{download.title}</h3>
                      <span className="text-sm text-text-dim">{download.size}</span>
                    </div>
                    <Badge variant="success">Completed</Badge>
                    <Button variant="accent" size="sm">Play</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Stats */}
          <div className="mt-8 p-4 bg-bg-highlight rounded-[--radius-lg]">
            <h3 className="text-sm font-medium text-text-main mb-3">Network Statistics</h3>
            <div className="grid grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-text-dim">Download Speed:</span>
                <span className="text-text-main ml-2">25.5 MB/s</span>
              </div>
              <div>
                <span className="text-text-dim">Disk Usage:</span>
                <span className="text-text-main ml-2">45.2 MB/s</span>
              </div>
              <div>
                <span className="text-text-dim">Downloaded Today:</span>
                <span className="text-text-main ml-2">40.2 GB</span>
              </div>
              <div>
                <span className="text-text-dim">Queue Total:</span>
                <span className="text-text-main ml-2">195 GB</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
