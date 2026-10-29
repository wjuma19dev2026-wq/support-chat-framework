import { Button } from '~/components/ui/button'

export const ContactInformationSkeleton = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse mb-3" />
        <div className="h-5 w-28 rounded bg-slate-200 dark:bg-slate-700 animate-pulse mb-2" />
        <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="flex items-center mt-2">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse mr-2" />
          <div className="h-3 w-12 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700 animate-pulse mb-3" />

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>
          </div>
        </div>

        <div>
          <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700 animate-pulse mb-3" />

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="h-4 w-14 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="h-9 w-full rounded-md bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
    </div>
  )
}
