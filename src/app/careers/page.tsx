"use client";

import { useQueryState, parseAsString } from "nuqs";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { jobs, type Job } from "@/data/jobs";
import Link from "next/link";

const DEPARTMENTS = ["All", "Engineering", "Design", "Marketing", "Operations"] as const;
const LOCATIONS = ["All", "Remote", "Hybrid", "On-site"] as const;
const TYPES = ["All", "Full-time", "Part-time"] as const;

const deptColors: Record<string, string> = {
  Engineering: "from-primary/20 to-blue-500/10 border-primary/30 text-primary",
  Design: "from-pink-500/20 to-purple-500/10 border-pink-500/30 text-pink-400",
  Marketing: "from-yellow-500/20 to-orange-500/10 border-yellow-500/30 text-yellow-400",
  Operations: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
};

const deptBadgeColors: Record<string, string> = {
  Engineering: "bg-primary/10 text-primary border-primary/20",
  Design: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Marketing: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Operations: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

function formatSalary(min: number, max: number) {
  return `$${(min / 1000).toFixed(0)}K – $${(max / 1000).toFixed(0)}K / yr`;
}

function JobCard({ job, index }: { job: Job; index: number }) {
  const gradientClass = deptColors[job.department] ?? "";
  const badgeClass = deptBadgeColors[job.department] ?? "";

  return (
    <motion.div
      key={job.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06, type: "spring", bounce: 0.3 }}
      layout
      className="group relative"
    >
      <div
        className={`relative bg-[#0D0F14] border border-white/10 rounded-2xl p-7 h-full flex flex-col gap-5 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-2xl`}
      >
        {/* Gradient glow bg on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            {job.featured && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 w-fit">
                <Star className="w-3 h-3 fill-yellow-400" /> Featured
              </span>
            )}
            <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border w-fit ${badgeClass}`}>
              {job.department}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-white/30 shrink-0 mt-1 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>

        {/* Title + description */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug">
            {job.title}
          </h3>
          <p className="text-sm text-[#8892B0] leading-relaxed line-clamp-3">{job.description}</p>
        </div>

        {/* Meta info */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-primary/70 shrink-0" />
            <span>{job.location}</span>
            <span className="text-white/20">·</span>
            <Clock className="w-4 h-4 text-primary/70 shrink-0" />
            <span>{job.type} · {job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <DollarSign className="w-4 h-4 shrink-0" />
            <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#8892B0] group-hover:border-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-white/40">Posted {job.postedDate} · Apply by {job.applyBy}</span>
          <a
            href={`mailto:careers@maxsolutionz.com?subject=Application for ${job.title}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Apply Now <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  const [dept, setDept] = useQueryState("dept", parseAsString.withDefault("All"));
  const [location, setLocation] = useQueryState("location", parseAsString.withDefault("All"));
  const [type, setType] = useQueryState("type", parseAsString.withDefault("All"));

  const filtered = jobs.filter((j) => {
    const deptOk = dept === "All" || j.department === dept;
    const locOk = location === "All" || j.location === location;
    const typeOk = type === "All" || j.type === type;
    return deptOk && locOk && typeOk;
  });

  const stats = [
    { label: "Open Positions", value: jobs.length.toString(), icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { label: "Team Members", value: "40+", icon: <Users className="w-5 h-5 text-primary" /> },
    { label: "Growth Rate", value: "200%", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { label: "Projects Delivered", value: "500+", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
  ];

  function FilterPill({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        id={`filter-${label.toLowerCase().replace(/\s/g, "-")}`}
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
          active
            ? "bg-primary text-[#030D0A] border-primary shadow-md shadow-primary/20"
            : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/15 rounded-full blur-[120px] opacity-60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-medium text-white mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-gray-300">We&apos;re Hiring</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400">
              Team
            </span>
          </h1>
          <p className="text-xl text-[#8892B0] max-w-2xl mx-auto leading-relaxed">
            Join a dynamic team of innovators, creators, and problem-solvers. Shape the future of digital experiences while growing your career in a collaborative environment.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 container mx-auto max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-2 text-center"
            >
              {stat.icon}
              <span className="text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-xs text-[#8892B0] font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Filters + Jobs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-screen-xl">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-10 flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
          >
            {/* Department */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mr-2 w-20">Dept</span>
              {DEPARTMENTS.map((d) => (
                <FilterPill
                  key={d}
                  label={d}
                  active={dept === d}
                  onClick={() => setDept(d === "All" ? null : d)}
                />
              ))}
            </div>

            {/* Location */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mr-2 w-20">Location</span>
              {LOCATIONS.map((l) => (
                <FilterPill
                  key={l}
                  label={l}
                  active={location === l}
                  onClick={() => setLocation(l === "All" ? null : l)}
                />
              ))}
            </div>

            {/* Type */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mr-2 w-20">Type</span>
              {TYPES.map((t) => (
                <FilterPill
                  key={t}
                  label={t}
                  active={type === t}
                  onClick={() => setType(t === "All" ? null : t)}
                />
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-white/40 mb-6">
            {filtered.length} position{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <Briefcase className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/50 text-lg font-medium">No positions match your filters.</p>
                <button
                  onClick={() => { setDept(null); setLocation(null); setType(null); }}
                  className="mt-4 text-primary text-sm underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="text-[#8892B0] text-lg mb-8">
              We&apos;re always looking for talented people. Send us your CV and we&apos;ll reach out when a matching role opens up.
            </p>
            <Link
              href="mailto:careers@maxsolutionz.com"
              className="inline-flex items-center gap-2 bg-primary text-[#030D0A] font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all"
            >
              Send Your CV <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
