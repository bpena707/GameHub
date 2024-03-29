'use client'

import {User} from ".prisma/client";
import {useSidebar} from "@/store/useSidebar";
import {UserItem} from "@/app/(browse)/_components/sidebar/user-item";

interface RecommendedProps {
    data: User[]
}
export const Recommended = ({
    data
}: RecommendedProps) => {
    const { collapsed } = useSidebar((state) => state)

    // show label if not collapsed and more than one user
    const showLabel = !collapsed && data.length > 0


  return (
      <div>
          {showLabel && (
              <div className='pl-6 mb-4'>
                  <p className='text-sm text-muted-foreground'>
                      Recommended
                  </p>
              </div>
          )}
          <ul className='space-y-2 px-2'>
              {data.map((user) => (
                  <UserItem
                    key={user.id}
                    username={user.username}
                    imageUrl={user.imageUrl}
                    isLive={true}
                  />
              ))}
          </ul>
      </div>
  )
}