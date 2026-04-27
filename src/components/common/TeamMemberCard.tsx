
import { 
  Card, 
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SafeIcon from "@/components/common/SafeIcon";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  credentials?: string;
}

/**
 * TeamMemberCard component displays professional profile information for agency staff.
 * It uses the consistent surface-raised styling and local Malta-inspired theme colors.
 */
export default function TeamMemberCard({ 
  name, 
  role, 
  bio, 
  photoUrl, 
  credentials 
}: TeamMemberCardProps) {
  return (
    <Card className="surface-raised interactive-lift h-full flex flex-col overflow-hidden">
      <CardHeader className="p-0 border-b border-border bg-muted/20">
        <div className="aspect-[4/5] relative w-full overflow-hidden">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage 
              src={photoUrl} 
              alt={name} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <AvatarFallback className="rounded-none bg-secondary flex items-center justify-center">
              <SafeIcon name="User" size={48} className="text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      
      <CardContent className="card-padding flex-1 flex flex-col space-y-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-item-title text-foreground">{name}</h3>
            {credentials && (
              <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider border-primary/30 text-primary">
                {credentials}
              </Badge>
            )}
          </div>
          <p className="text-label text-accent font-semibold">{role}</p>
        </div>

        <div className="h-px bg-border/60 w-12" />

        <p className="text-caption text-foreground/80 line-clamp-4 flex-1">
          {bio}
        </p>

        <div className="pt-2 flex items-center gap-4">
          <button 
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.location.href = './contact-us.html'}
            title={`Contact ${name}`}
          >
            <SafeIcon name="Mail" size={18} />
          </button>
          <button 
            className="text-muted-foreground hover:text-accent transition-colors"
            onClick={() => console.log('LinkedIn Profile Link')}
          >
            <SafeIcon name="Linkedin" size={18} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
