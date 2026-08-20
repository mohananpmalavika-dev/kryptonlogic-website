export interface ServiceItem {
  id: string;
  title: string;
  category: 'startup' | 'software' | 'web-ecommerce' | 'cctv-hardware' | 'data-cloud';
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  badge?: string;
}

export interface CameraFeed {
  id: string;
  name: string;
  branch: string;
  city: string;
  status: 'ONLINE' | 'STREAMING' | 'AI_ACTIVE';
  resolution: string;
  fps: number;
  bitrate: string;
  latencyMs: number;
  cameraModel: string;
  detections: {
    type: 'person' | 'vehicle' | 'motion' | 'intrusion';
    label: string;
    confidence: number;
    box: { top: number; left: number; width: number; height: number };
    meta?: string;
  }[];
}

export interface IncidentAlert {
  id: string;
  timestamp: string;
  branch: string;
  cameraName: string;
  type: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  description: string;
  snapshotUrl?: string;
  status: 'DISPATCHED' | 'ACKNOWLEDGED' | 'RESOLVED';
}
