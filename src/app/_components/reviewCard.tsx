import { cn } from '@/lib/utils';
import React, { memo } from 'react' 
export const ReviewCard = memo (({ body }: { body: string }) => {
    return (
        <figure
            className={cn(
                "relative h-[2rem] w-[4rem] cursor-pointer overflow-hidden rounded-md border p-2 grid place-content-center",
                "border-stone-950/[.1] bg-stone-950/[.01] hover:bg-stone-950/[.05]",
                "dark:border-stone-50/[.1] dark:bg-stone-50/[.10] dark:hover:bg-stone-50/[.15]"
            )}
        >
            <blockquote className="mt-2 text-[0.60rem] tracking-wide text-stone-400 font-thin text-center">
                {body}
            </blockquote>
        </figure>
    );
});

ReviewCard.displayName = 'ReviewCard';