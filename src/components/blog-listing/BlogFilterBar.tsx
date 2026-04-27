
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SafeIcon from '@/components/common/SafeIcon';

interface BlogFilterBarProps {
  sections: string[];
  activeSection: string;
  onSectionChange: (section: string) => void;
  keyword: string;
  onKeywordChange: (keyword: string) => void;
  isClient: boolean;
}

export default function BlogFilterBar({
  sections,
  activeSection,
  onSectionChange,
  keyword,
  onKeywordChange,
  isClient,
}: BlogFilterBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onKeywordChange(e.target.value);
  };

  const handleClearFilters = () => {
    onSectionChange('');
    onKeywordChange('');
  };

  const hasActiveFilters = activeSection || keyword;

  if (!isClient) {
    return (
      <div className="filter-bar opacity-50 pointer-events-none">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="w-64 h-10 bg-muted rounded-md animate-pulse" />
          <div className="w-40 h-10 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="filter-bar">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex-1 min-w-[200px]">
          <Input
            type="text"
            placeholder="Search articles..."
            value={keyword}
            onChange={handleSearchChange}
            className="w-full"
            aria-label="Search articles by keyword"
          />
        </div>

        <Select value={activeSection || "all"} onValueChange={(v) => onSectionChange(v === "all" ? "" : v)}>
          <SelectTrigger className="w-[180px]" aria-label="Filter by category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {sections.map((sec) => (
              <SelectItem key={sec} value={sec}>
                {sec}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearFilters}
            className="flex items-center gap-2"
          >
            <SafeIcon name="X" size={16} />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
