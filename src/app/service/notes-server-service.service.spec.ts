import { TestBed, inject } from '@angular/core/testing';

import { NotesServerService } from './notes-server-service.service';

describe('NotesServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesServerService]
    });
  });

  it('should be created', inject([NotesServerService], (service: NotesServerService) => {
    expect(service).toBeTruthy();
  }));
});
