import React, { useEffect, useRef } from 'react';
import './Webpages.css';

// New Award Marker component
const AwardMarker = ({ year, description, position, color = '#d4af37' }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="absolute" style={{ 
      left: `${position}%`, 
      transform: 'translateX(-50%)', 
      bottom: '0', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start'
    }}>
      {/* The award dot */}
      <div 
        className="w-3.5 h-3.5 rounded-full animate-pulse z-30" 
        style={{ 
          backgroundColor: color, 
          border: '2px solid white', 
          position: 'relative', 
          boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)', 
          zIndex: 30,
          marginTop: '45px'
        }}
      ></div>
      
      {/* Description now below dot with a small margin */}
      <div 
        className="text-white text-sm font-bold p-2 rounded z-50" 
        style={{ 
          maxWidth: '180px', 
          textAlign: 'center',
          backgroundColor: '#000000', // Consistent background color
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)', // Consistent shadow
          textShadow: '0px 0px 2px rgba(0,0,0,1)',
          zIndex: 50, // Ensure text stays on top
          marginTop: '-60px', // Position it above the dot with negative margin
          transition: 'color 0.2s ease-in-out', // Transition only applies to color now
          cursor: 'pointer', // Show pointer cursor on hover
          color: isHovered ? '#ffd700' : 'white' // Text changes to brighter gold on hover
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {description}
      </div>
    </div>
  );
};

const TimelineEntry = ({
  startYear,
  endYear,
  title,
  subtitle,
  startPosition,
  endPosition,
  color,
  isArrowShape = false,
  rowIndex = 0, // Add row index to position entries vertically
}) => {
  // Add a minimum left padding to prevent overlap with labels
  const leftPadding = 15; // Percentage padding to prevent overlap with labels
  const adjustedStartPosition = Math.max(startPosition, leftPadding);
  const adjustedEndPosition = Math.max(endPosition, adjustedStartPosition + 5); // Ensure minimum width
  
  return (
    <div
      className={`absolute p-3 text-white flex flex-col justify-center timeline-entry`}
      style={{
        left: `${adjustedStartPosition}%`,
        width: `${adjustedEndPosition - adjustedStartPosition}%`,
        backgroundColor: color,
        clipPath: isArrowShape ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' : 'none',
        borderRadius: isArrowShape ? '0' : '4px',
        top: `${rowIndex * 6}rem`, // Increased vertical spacing between the two rows
        height: '4rem', // Fixed height for all entries
        zIndex: 10, // Reduced z-index to ensure it's below the labels
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)', // Add shadow for depth
        height: 'auto',
      }}
    >
      <div style={{ position: 'relative', height: 'auto' }}>
        <h3 
          className="text-sm font-bold" 
          style={{ 
            position: 'relative',
            zIndex: 20,
            display: 'inline-block',
            marginBottom: '0rem',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </h3> <br/ >
        <span className="text-xs">{subtitle}</span> <br/ >
        <span className="text-xs mt-1">{startYear} - {endYear}</span>
      </div>
    </div>
  );
};


const Timeline = () => {
  // Reference to the scroll container
  const scrollContainerRef = useRef(null);
  
  // Set scroll position to the right when component mounts
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Set scroll position to the far right
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, []);

  // Timeline spans from 2020 to 2025 to match education/career
  const startYear = 2021;
  const endYear = 2026;
  const range = endYear - startYear;
  
  // Calculate position percentage based on year with some compression
  const getPosition = (year) => {
    // Calculate base position
    const basePosition = ((year - startYear) / range) * 100;
    
    // Apply 20% compression to bring years a bit closer
    const compressionFactor = 0.75; // 80% of original spacing
    const middlePoint = 50;
    
    // Compress around the middle point (less space between years)
    return middlePoint + (basePosition - middlePoint) * compressionFactor;
  };

  const educationEntries = [
    {
      startYear: '2021',
      endYear: '2025',
      title: 'B.S. CS',
      subtitle: 'University of Southern California',
      startPosition: getPosition(2021.5),
      endPosition: getPosition(2025.5),
      color: 'rgba(212, 175, 55, 0.8)', // Primary gold with transparency
      isArrowShape: false,
    },
    {
      startYear: '2024',
      endYear: '2025',
      title: 'M.S. CS',
      subtitle: 'University of Southern California',
      startPosition: getPosition(2024),
      endPosition: getPosition(2025.5),
      color: 'rgba(212, 175, 55, 0.8)', // Primary gold with transparency
      isArrowShape: false,
    }
  ];

  const careerEntries = [
    {
      startYear: '2025',
      endYear: 'Present',
      title: 'Software Engineer',
      subtitle: 'Capital One',
      startPosition: getPosition(2025.6),
      endPosition: getPosition(2026.5),
      color: 'rgba(170, 140, 45, 0.9)', // Darker gold
      isArrowShape: true,
    },
    {
      startYear: '2022',
      endYear: '2023',
      title: 'TA',
      subtitle: 'Fundamentals of C++',
      startPosition: getPosition(2022.5),
      endPosition: getPosition(2023.5),
      color: 'rgba(85, 70, 20, 1)', // Darkest gold/brown
      isArrowShape: false,
    },
    {
      startYear: '2023',
      endYear: '2024',
      title: 'Head TA',
      subtitle: 'Intro to AI/ML',
      startPosition: getPosition(2023.5),
      endPosition: getPosition(2025),
      color: 'rgba(85, 70, 20, 1)', // Darkest gold/brown
      isArrowShape: false,
    },
    {
      startYear: '2024',
      endYear: '2025',
      title: 'TA',
      subtitle: 'Data Science & ML',
      startPosition: getPosition(2025),
      endPosition: getPosition(2025.5),
      color: 'rgba(85, 70, 20, 1)', // Darkest gold/brown
      isArrowShape: false,
    },
    {
      startYear: '2024',
      endYear: '2025',
      title: 'TA',
      subtitle: 'Software Engineering',
      startPosition: getPosition(2025),
      endPosition: getPosition(2025.5),
      color: 'rgba(85, 70, 20, 1)', // Darkest gold/brown
      isArrowShape: false,
    },
  ];

  // Function to assign rows to overlapping entries
  const assignRows = (entries) => {
    if (!entries.length) return [];
    
    // Sort entries by start position
    const sortedEntries = [...entries].sort((a, b) => a.startPosition - b.startPosition);
    
    // Assign rows to each entry
    const result = [];
    const rows = [[], []]; // Track entries in each row
    
    // Process each entry
    for (const entry of sortedEntries) {
      // Try to place in row 0 first
      let rowIndex = 0;
      let canPlaceInRow0 = true;
      
      // Check if this entry would overlap with any entry in row 0
      for (const existingEntry of rows[0]) {
        // Improved overlap detection logic
        // If entry starts exactly where existing entry ends (or very close), 
        // or existing entry starts where this entry ends, they're adjacent, not overlapping
        const isAdjacent = 
          Math.abs(entry.startPosition - existingEntry.endPosition) < 0.1 || 
          Math.abs(existingEntry.startPosition - entry.endPosition) < 0.1;
          
        // If they're adjacent, don't consider them overlapping
        if (isAdjacent) continue;
        
        // Otherwise, check for actual overlaps
        const overlapsWithin = 
          (entry.startPosition > existingEntry.startPosition && entry.startPosition < existingEntry.endPosition) ||
          (entry.endPosition > existingEntry.startPosition && entry.endPosition < existingEntry.endPosition) ||
          (existingEntry.startPosition > entry.startPosition && existingEntry.startPosition < entry.endPosition) ||
          (entry.startPosition <= existingEntry.startPosition && entry.endPosition >= existingEntry.endPosition);
        
        if (overlapsWithin) {
          canPlaceInRow0 = false;
          break;
        }
      }
      
      // Place in row 1 if can't place in row 0
      if (!canPlaceInRow0) {
        rowIndex = 1;
      }
      
      // Add entry with row index
      const entryWithRow = { ...entry, rowIndex };
      result.push(entryWithRow);
      rows[rowIndex].push(entryWithRow);
    }
    
    return result;
  };

  // Assign rows to overlapping entries
  const educationEntriesWithRows = assignRows(educationEntries);
  const careerEntriesWithRows = assignRows(careerEntries);

  // Calculate the necessary height based on the number of rows
  const educationRowCount = Math.max(...educationEntriesWithRows.map(e => e.rowIndex), 0) + 1;
  const careerRowCount = Math.max(...careerEntriesWithRows.map(e => e.rowIndex), 0) + 1;

  // Generate year markers
  const yearMarkers = [];
  for (let year = startYear; year <= endYear; year += 1) {
    yearMarkers.push({
      year: year.toString(),
      position: getPosition(year),
    });
  }

  // Add award data
  const awards = [
    {
      year: 2025.2,
      description: "3rd Place @ Stanford TreeHacks",
      color: '#d4af37' // Golden dot instead of white
    }
  ];

  // Calculate award positions
  const awardMarkers = awards.map(award => ({
    ...award,
    position: getPosition(award.year)
  }));

  // Keep the original width to ensure full page span
  const minTimelineWidth = "150%";

  return (
    <div className="timeline-fullwidth" style={{ backgroundColor: '#000000' }}>
      <h2 className="timeline-title" style={{ color: '#d4af37' }}>
        My Journey
      </h2>
      
      <div className="timeline-container" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fixed labels on the left */}
        <div className="timeline-labels" style={{ position: 'relative', zIndex: 100 }}>
          <div className="timeline-label-spacer"></div>
          <div className="bg-primary-gold text-black p-3 w-40 timeline-label"
               style={{ height: `${educationRowCount * 4.5}rem`, marginTop: "1rem", zIndex: 100, position: 'relative' }}>
            <h3 className="text-xl font-bold">EDUCATION</h3>
          </div>
          <div className="bg-primary-gold text-black p-3 w-40 timeline-label"
               style={{ height: `${careerRowCount * 4.5}rem`, marginTop: "1rem", zIndex: 100, position: 'relative' }}>
            <h3 className="text-xl font-bold">CAREER</h3>
          </div>
        </div>
        
        {/* Scrollable timeline content */}
        <div ref={scrollContainerRef} className="timeline-scroll-container" style={{ overflowY: 'hidden', overflowX: 'auto' }}>
          <div className="bg-primary-black p-6 pb-16 relative" style={{ minWidth: minTimelineWidth }}>
            {/* Year scale */}
            <div className="h-20 relative mb-8">
              {/* Year markers */}
              {yearMarkers.map((marker, index) => (
                <div 
                  key={index} 
                  className="absolute text-gold-light text-sm"
                  style={{ 
                    left: `${marker.position}%`, 
                    transform: 'translateX(-50%)', 
                    bottom: '0',
                    padding: '2px 4px',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                  }}
                >
                  {marker.year}
                </div>
              ))}
              
              {/* Timeline bar in year scale with solid background for award area */}
              <div 
                className="absolute h-8 w-full top-16 rounded-none" 
                style={{ position: 'relative', backgroundColor: '#000000' }}
              >
                {/* Black background specifically for award areas - removed since entire bar is now black */}
                
                {/* Award markers on the timeline */}
                {awardMarkers.map((award, index) => (
                  <AwardMarker
                    key={`award-${index}`}
                    year={award.year}
                    description={award.description}
                    position={award.position}
                    color={award.color}
                  />
                ))}
              </div>
            </div>
            
            {/* Education and Career Sections Container */}
            <div className="timeline-tracks-container" style={{ overflow: 'visible' }}>
              {/* Education track */}
              <div className="mb-4 relative education-track" 
                  style={{ height: `${educationRowCount * 4.5}rem`, marginTop: "1rem" }}>
                {educationEntriesWithRows.map((entry, index) => (
                  <TimelineEntry
                    key={index}
                    startYear={entry.startYear}
                    endYear={entry.endYear}
                    title={entry.title}
                    subtitle={entry.subtitle}
                    startPosition={entry.startPosition}
                    endPosition={entry.endPosition}
                    color={entry.color}
                    isArrowShape={entry.isArrowShape}
                    rowIndex={entry.rowIndex}
                  />
                ))}
                
                {/* Gold line removed */}
              </div>
              
              {/* Career track */}
              <div className="relative career-track" 
                  style={{ height: `${careerRowCount * 4.5}rem`, marginTop: "1rem" }}>
                {careerEntriesWithRows.map((entry, index) => (
                  <TimelineEntry
                    key={index}
                    startYear={entry.startYear}
                    endYear={entry.endYear}
                    title={entry.title}
                    subtitle={entry.subtitle}
                    startPosition={entry.startPosition}
                    endPosition={entry.endPosition}
                    color={entry.color}
                    isArrowShape={entry.isArrowShape}
                    rowIndex={entry.rowIndex}
                  />
                ))}
              </div>
            </div>
            
            {/* Timeline watermark */}
            <div className="absolute right-0 bottom-0 h-full flex items-center">
              <div className="transform rotate-90 origin-right text-gold-light text-xs whitespace-nowrap">
                Timeline View
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - now indicating to scroll left */}
      <div className="scroll-indicator">
        <span>Scroll to see earlier years</span>
        <span className="scroll-arrow scroll-arrow-left">←</span>
      </div>
    </div>
  );
};

export default Timeline; 