import React from 'react';

const ProjectList: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Repeat this block for each project */}
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold">Project Title</h3>
      <p className="text-sm">Project description goes here.</p>
    </div>
    {/* Repeat block end */}
  </div>
);

export default ProjectList;