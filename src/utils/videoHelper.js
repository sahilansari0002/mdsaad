// Helper utility to detect and format video URLs (including Google Drive video links)

export function parseVideoUrl(url) {
  if (!url) return { isGoogleDrive: false, embedUrl: '' };

  // Support various Google Drive URL formats:
  // - https://drive.google.com/file/d/1qTIt1PPs885hGe8DsyiGaVB2VCSdCl_j/view?usp=drive_link
  // - https://drive.google.com/open?id=1qTIt1PPs885hGe8DsyiGaVB2VCSdCl_j
  // - https://drive.google.com/file/d/1qTIt1PPs885hGe8DsyiGaVB2VCSdCl_j/preview
  const driveRegex = /(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=))([a-zA-Z0-9_-]+)/;
  const fileIdMatch = url.match(driveRegex);

  if (fileIdMatch && fileIdMatch[1]) {
    const fileId = fileIdMatch[1];
    return {
      isGoogleDrive: true,
      fileId,
      embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      viewUrl: `https://drive.google.com/file/d/${fileId}/view`
    };
  }

  return {
    isGoogleDrive: false,
    embedUrl: url,
    viewUrl: url
  };
}
