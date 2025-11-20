'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

type Job = {
  id: string;
  title: string;
  address: string;
  time: string;
  duties: string;
  claim?: string;
};

export default function JobsContentMobile() {
  const t = useTranslations('Recruit');
  const [jobList, setJobList] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (selectedJob) {
      window.scrollTo(0, 100);
    }
  }, [selectedJob]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/json/job.json?${Math.random()}`,
      );
      const data = await response.json();
      const jobs = data.map((item: any) => item.list).flat() as Job[];
      setJobList(jobs);
      setAllJobs(jobs);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = () => {
    if (searchValue) {
      const filtered = allJobs.filter(job =>
        job.title.includes(searchValue),
      );
      setJobList(filtered);
    } else {
      setJobList(allJobs);
    }
  };

  const handleViewJob = (job: Job) => {
    setSelectedJob(job);
  };

  const handleBackToList = () => {
    setSelectedJob(null);
  };

  return (
    <div className="flex w-full flex-col items-center bg-[#f5f5f5] pb-[100px]">
      {/* Join Us Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-[72px] font-normal text-[#343434]">
          <span>JOIN US</span>
        </div>
        <div className="text-center text-[12px] font-normal tracking-[2px] text-[#343434]">
          <span>{t('brain_tech_slogan')}</span>
        </div>
      </div>

      {/* Search */}
      <div className="my-5 w-full px-[30px] text-[12px]">
        <div className="flex w-full overflow-hidden rounded-[20px] bg-white">
          <input
            type="text"
            placeholder={t('search_position')}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="h-10 flex-1 border-0 px-[10px] text-[12px] outline-none"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="h-10 w-[60px] flex-[60px_0_0] cursor-pointer border-0 bg-[#333333] text-center text-[12px] !text-white outline-none"
          >
            {t('search')}
          </button>
        </div>
      </div>

      {/* Job List */}
      {!selectedJob && (
        <div className="mt-1 flex flex-col items-center bg-white pt-[30px]">
          <h4 className="self-start pl-[30px] text-left text-xl font-normal">
            {t('social_recruitment')}
          </h4>

          <div className="px-[12px]">
            {jobList.map(job => (
              <div
                key={job.id}
                className="mb-[33px] flex justify-between bg-[#fafafa] p-4 opacity-100"
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="flex w-full justify-between text-[14px] font-normal text-[#252525]">
                      <span className="no-underline">{job.title}</span>
                      <button
                        type="button"
                        onClick={() => handleViewJob(job)}
                        className="rounded border border-solid border-[#333] px-1 leading-6"
                      >
                        {t('job_info')}
                      </button>
                    </div>
                  </div>
                  <div className="text-[12px] font-normal text-[#83868a]">
                    {job.address}
                    {' '}
                    I
                    {' '}
                    {job.time}
                  </div>
                  <div
                    className="[display:-webkit-box] overflow-hidden text-[12px] font-normal text-ellipsis text-[#83868a] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                    dangerouslySetInnerHTML={{ __html: job.duties }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Job Detail */}
      {selectedJob && (
        <div className="bg-white px-0 py-[30px]">
          <div
            className="flex cursor-pointer items-center justify-start"
            onClick={handleBackToList}
            onKeyDown={e => e.key === 'Enter' && handleBackToList()}
            role="button"
            tabIndex={0}
          >
            <div className="h-5 [transform:scaleY(2)] px-[10px] text-[18px] leading-none font-normal">
              &lt;
            </div>
            <span className="text-[18px]">{t('job_info')}</span>
          </div>

          <article className="mt-[30px] block px-5">
            <h4 className="text-base font-bold">{selectedJob.title}</h4>
            <div className="mt-[6px] text-[12px]">
              <span className="relative mr-[12px] pr-[12px] leading-none after:absolute after:top-1/2 after:right-0 after:h-[12px] after:[transform:translateY(-50%)] after:border-r after:border-solid after:border-[#333] after:content-['_']">
                {selectedJob.address}
              </span>
              <span className="leading-none">{selectedJob.time}</span>
            </div>
            <dl className="mt-5">
              <dt className="mt-[10px] text-[14px] text-[#333]">{t('job_duties')}</dt>
              <dd
                className="flex flex-col text-[12px] text-[#8f8f8f]"
                dangerouslySetInnerHTML={{ __html: selectedJob.duties }}
              />
              <dt className="mt-[10px] text-[14px] text-[#333]">{t('job_requirements')}</dt>
              <dd
                className="flex flex-col text-[12px] text-[#8f8f8f]"
                dangerouslySetInnerHTML={{ __html: selectedJob.claim || '' }}
              />
              <dt className="mt-[10px] text-[14px] text-[#333]">{t('how_to_apply')}</dt>
              <dd className="flex flex-col text-[12px] text-[#8f8f8f]">
                <span className="leading-[1.6]">{t('application_email')}</span>
              </dd>
            </dl>
          </article>
        </div>
      )}
    </div>
  );
}
