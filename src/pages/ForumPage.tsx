import { useState } from 'react';
import { CommunityHeader, Footer } from '../components/blocks';
import { SearchIcon, ThumbsUpIcon, CommentIcon, ChevronDownIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const forumCategories = [
  { name: 'New to Steam', threads: 150000 },
  { name: 'Help & Tips', threads: 500000 },
  { name: 'Suggestion & Ideas', threads: 80000 },
  { name: 'Steam Discussions', threads: 60000 },
  { name: 'Steam for Mac', threads: 15000 },
  { name: 'Steam Mobile', threads: 18000 },
  { name: 'Steam Community', threads: 65000 },
  { name: 'VAC Discussion', threads: 258000 },
  { name: 'Hardware', threads: 70000 },
  { name: 'Off-Topic', threads: 150000 },
];

const threads = [
  {
    id: 1,
    title: 'Steam Friend Train',
    author: 'tacopunk',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
  {
    id: 2,
    title: 'Hi Newcomers',
    author: 'CoolUser',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
  {
    id: 3,
    title: 'Hi Newcomers',
    author: 'CoolUser',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
  {
    id: 4,
    title: 'Hi Newcomers',
    author: 'CoolUser',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
  {
    id: 5,
    title: 'Hi Newcomers',
    author: 'CoolUser',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
  {
    id: 6,
    title: 'Hi Newcomers',
    author: 'CoolUser',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
  {
    id: 7,
    title: 'Hi Newcomers',
    author: 'CoolUser',
    authorColor: 'text-primary',
    time: '11 mins ago',
    thumbsUp: 5546,
    comments: 2500700,
  },
];

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState('New to Steam');
  const [currentPage, setCurrentPage] = useState(1);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-bg-main">
      <CommunityHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-text-dim mb-4">
          <span className="hover:text-primary cursor-pointer">Discussions</span>
          <span className="mx-2">&gt;</span>
          <span>Steam Forums</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-text-main">Steam Forums</h1>
          <Button variant="secondary">Subscribe</Button>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Categories Sidebar */}
          <aside className="w-56 flex-shrink-0">
            <div className="bg-bg-highlight rounded-[--radius-md] overflow-hidden">
              <div className="p-3 border-b border-bg-hover">
                <div className="flex items-center justify-between text-xs text-text-dim">
                  <span>Forums</span>
                  <span>Threads</span>
                </div>
              </div>
              <div className="divide-y divide-bg-hover">
                {forumCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between p-3 text-sm transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-primary text-bg-main'
                        : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs">{formatNumber(category.threads)}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Threads List */}
          <div className="flex-1">
            <div className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden">
              {/* Search */}
              <div className="p-4 border-b border-bg-hover">
                <div className="flex items-center justify-between">
                  <Input
                    placeholder="Search..."
                    icon={<SearchIcon className="w-4 h-4" />}
                    className="text-sm py-1.5 w-64"
                  />
                  <div className="flex items-center gap-2 text-sm text-text-dim">
                    <span>Discussions</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Threads */}
              <div className="divide-y divide-bg-hover">
                {threads.map((thread) => (
                  <div
                    key={thread.id}
                    className="p-4 hover:bg-bg-hover transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-medium text-text-main mb-1 hover:text-primary transition-colors">
                          {thread.title}
                        </h3>
                        <span className={`text-sm ${thread.authorColor}`}>{thread.author}</span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-text-dim">
                        <span>{thread.time}</span>
                        <div className="flex items-center gap-1">
                          <ThumbsUpIcon className="w-4 h-4" />
                          <span>{formatNumber(thread.thumbsUp)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CommentIcon className="w-4 h-4" />
                          <span>{formatNumber(thread.comments)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-end gap-2 p-4 border-t border-bg-hover">
                <button className="px-3 py-1.5 text-sm bg-bg-main text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                  Prev
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 text-sm rounded-[--radius-sm] transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-bg-main'
                        : 'bg-bg-main text-text-dim hover:bg-bg-hover'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-text-dim mx-1">...</span>
                <button className="px-3 py-1.5 text-sm bg-bg-main text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                  10
                </button>
                <button className="px-3 py-1.5 text-sm bg-bg-main text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
