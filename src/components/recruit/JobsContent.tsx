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

export default function JobsContent() {
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
      {/* Top Navigation */}
      <div className="mx-auto w-[1400px] self-start pt-[130px]">
        <div
          className="flex cursor-pointer items-center justify-start"
          onClick={() => window.history.back()}
          onKeyDown={e => e.key === 'Enter' && window.history.back()}
          role="button"
          tabIndex={0}
        >
          <div className="h-5 [transform:scaleY(2)] px-[10px] text-[34px] leading-none font-normal">
            &lt;
          </div>
          <span className="ml-[75px] text-[40px]">{t('elite_recruitment')}</span>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="h-[186px] w-[530px] text-[129px] leading-[203px] font-normal text-[#343434]">
          <span>JOIN US</span>
        </div>
        <div className="h-9 w-[580px] text-center text-[25px] leading-[30px] font-normal tracking-[15px] text-[#343434]">
          <span>{t('brain_tech_slogan')}</span>
        </div>
      </div>

      {/* Search */}
      <div className="my-[84px] flex justify-center">
        <div className="flex rounded-l-[40px] bg-white pl-[30px]">
          <input
            type="text"
            placeholder={t('search_position')}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="h-[78px] w-[911px] border-0 px-[10px] text-[25px] outline-none"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="h-[78px] w-[167px] cursor-pointer rounded-r-[39px] border-0 bg-[#333333] text-center text-xl text-white outline-none"
          >
            {t('search')}
          </button>
        </div>
      </div>

      {/* Job List */}
      {!selectedJob && (
        <div className="mt-1 flex w-[1400px] flex-col items-center bg-white pt-[100px] pb-[50px]">
          <h4 className="mb-[48px] w-full pl-[200px] text-left text-[40px] font-normal">
            {t('social_recruitment')}
          </h4>

          <div className="w-[1070px]">
            {jobList.map(job => (
              <div
                key={job.id}
                className="mb-[33px] flex w-[1070px] justify-between rounded-none bg-[#fafafa] pb-[27px] opacity-100"
              >
                <div>
                  <div className="mt-[41px] ml-[44px] flex items-center">
                    <div className="h-[34px] text-[23px] leading-[28px] font-normal text-[#252525]">
                      <span className="no-underline">{job.title}</span>
                    </div>
                  </div>
                  <div className="mt-[13px] ml-[44px] h-[25px] w-[282px] text-[18px] leading-[21px] font-normal text-[#83868a]">
                    {job.address}
                    {' '}
                    I
                    {' '}
                    {job.time}
                  </div>
                  <div
                    className="mt-[26px] ml-[44px] [display:-webkit-box] w-[774px] overflow-hidden text-[16px] leading-[25px] font-normal text-ellipsis text-[#83868a] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                    dangerouslySetInnerHTML={{ __html: job.duties }}
                  />
                </div>
                <div className="flex self-end">
                  <button
                    type="button"
                    onClick={() => handleViewJob(job)}
                    className="mr-[55px] flex h-[38px] w-[130px] items-center justify-center border border-solid border-[#252525] text-center text-[18px] leading-[38px] font-normal text-[#252525] opacity-100"
                  >
                    <span className="cursor-pointer leading-[22px]">{t('job_info')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Job Detail */}
      {selectedJob && (
        <div className="m-[0_auto] w-[1400px] bg-white px-[78px] pt-[100px] pb-[250px]">
          <div
            className="flex cursor-pointer justify-start"
            onClick={handleBackToList}
            onKeyDown={e => e.key === 'Enter' && handleBackToList()}
            role="button"
            tabIndex={0}
          >
            <div className="h-5 [transform:scaleY(2)] px-[10px] text-[34px] leading-none font-normal">
              &lt;
            </div>
            <span className="ml-[30px] text-[40px]">{t('job_info')}</span>
          </div>

          <article className="block pt-[78px] pl-[40px]">
            <h4 className="text-[34px] font-normal">{selectedJob.title}</h4>
            <div className="mt-[12px] text-[18px]">
              <span className="relative mr-[12px] pr-[12px] leading-none after:absolute after:top-1/2 after:right-0 after:h-[12px] after:[transform:translateY(-50%)] after:border-r after:border-solid after:border-[#333] after:content-['_']">
                {selectedJob.address}
              </span>
              <span className="leading-none">{selectedJob.time}</span>
            </div>
            <dl className="pt-[22px]">
              <dt className="mt-[44px] text-2xl">{t('job_duties')}</dt>
              <dd
                className="mt-[25px] flex flex-col text-[18px] text-[#8f8f8f]"
                dangerouslySetInnerHTML={{ __html: selectedJob.duties }}
              />
              <dt className="mt-[44px] text-2xl">{t('job_requirements')}</dt>
              <dd
                className="mt-[25px] flex flex-col text-[18px] text-[#8f8f8f]"
                dangerouslySetInnerHTML={{ __html: selectedJob.claim || '' }}
              />
              <dt className="mt-[44px] text-2xl">{t('how_to_apply')}</dt>
              <dd className="mt-[25px] flex flex-col text-[18px] text-[#8f8f8f]">
                <span className="leading-[1.6]">{t('application_email')}</span>
              </dd>
            </dl>
          </article>
        </div>
      )}
    </div>
  );
}
