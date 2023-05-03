import path from 'path';

export const formatNameWithGroup = (group: string) => ((filePath: string): string => {
  const fileName = path.basename(filePath, path.extname(filePath));
  const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
  const capitalizedFileName = (
    fileName
      .split('-')
      .map((string: string) => capitalize(string))
      .join('')
  );

  return `${capitalizedFileName}${group}`;
});


