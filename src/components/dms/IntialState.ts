export const DMSMockdata = {
	id: 0,
	name: 'root',
	type: 'Folder',
	files: [
		{
			id: 1,
			name: 'Project',
			type: 'Folder',
			size: '2 MB',
			lastModified: 'John, March 13 @00:00',
			files: [
				{
					id: 100,
					name: 'sample.pdf',
					type: 'Document',
					size: '2 MB',
					lastModified: 'John, March 13 @00:00'
				},
				{
					id: 101,
					name: 'laptop.png',
					type: 'Image',
					size: '2 MB',
					lastModified: 'John, March 13 @00:00'
				},
				{
					id: 180,
					name: 'team',
					type: 'Folder',
					size: '2 MB',
					lastModified: 'John, March 13 @00:00',
					files: [
						{
							id: 102,
							name: 'shan.doc',
							type: 'Document',
							size: '2 MB',
							lastModified: 'John, March 13 @00:00'
						},
						{
							id: 103,
							name: 'mei.doc',
							type: 'Image',
							size: '2 MB',
							lastModified: 'John, March 13 @00:00'
						},
						// New folder and files here
						{
							id: 104,
							name: 'subfolder',
							type: 'Folder',
							size: '1 MB',
							lastModified: 'Mei, March 29 @00:00',
							files: [
								{
									id: 105,
									name: 'file1.docx',
									type: 'Document',
									size: '0.8 MB',
									lastModified: 'Mei, March 29 @00:00'
								},
								{
									id: 106,
									name: 'file2.png',
									type: 'Image',
									size: '0.2 MB',
									lastModified: 'Mei, March 29 @00:00'
								}
							]
						}
					]
				}
			]
		},
		{
			id: 2,
			name: 'Application',
			type: 'Folder',
			size: '1.5 MB',
			lastModified: 'Emily, March 14 @00:00',
			files: [
				{
					id: 104,
					name: 'document.doc',
					type: 'Document',
					size: '1.2 MB',
					lastModified: 'Emily, March 14 @00:00'
				},
				{
					id: 105,
					name: 'image.png',
					type: 'Image',
					size: '2.5 MB',
					lastModified: 'Emily, March 14 @00:00'
				}
			]
		},
		{
			id: 3,
			name: 'Report',
			size: '3 MB',
			type: 'Folder',
			lastModified: 'David, March 15 @00:00',
			files: [
				{
					id: 104,
					name: 'report.docx',
					size: '1.8 MB',
					type: 'Document',
					lastModified: 'David, March 15 @00:00'
				},
				{
					id: 105,
					name: 'chart.png',
					size: '3.2 MB',
					type: 'Image',
					lastModified: 'David, March 15 @00:00'
				}
			]
		},
		{
			id: 4,
			name: 'Presentation',
			size: '1 MB',
			type: 'Folder',
			lastModified: 'Sophia, March 16 @00:00',
			files: [
				{
					id: 106,
					name: 'presentation.pptx',
					size: '0.8 MB',
					type: 'Document',
					lastModified: 'Sophia, March 16 @00:00'
				},
				{
					id: 107,
					name: 'slide1.png',
					size: '0.2 MB',
					type: 'Image',
					lastModified: 'Sophia, March 16 @00:00'
				}
			]
		},
		{
			id: 5,
			name: 'Proposal',
			size: '2.5 MB',
			type: 'Folder',
			lastModified: 'Oliver, March 17 @00:00',
			files: [
				{
					id: 108,
					name: 'proposal.doc',
					size: '2 MB',
					type: 'Document',
					lastModified: 'Oliver, March 17 @00:00'
				},
				{
					id: 109,
					name: 'proposal.pdf',
					size: '0.5 MB',
					type: 'Document',
					lastModified: 'Oliver, March 17 @00:00'
				}
			]
		},
		{
			id: 6,
			name: 'Meeting Notes',
			size: '0.5 MB',
			type: 'Folder',
			lastModified: 'Emma, March 18 @00:00',
			files: [
				{
					id: 110,
					name: 'meeting_notes.docx',
					size: '0.3 MB',
					type: 'Document',
					lastModified: 'Emma, March 18 @00:00'
				},
				{
					id: 111,
					name: 'agenda.txt',
					size: '0.2 MB',
					type: 'Text',
					lastModified: 'Emma, March 18 @00:00'
				}
			]
		},
		{
			id: 7,
			name: 'Financial Statement',
			size: '4 MB',
			type: 'Folder',
			lastModified: 'Liam, March 19 @00:00',
			files: [
				{
					id: 112,
					name: 'financial_statement.xlsx',
					size: '3.5 MB',
					type: 'Document',
					lastModified: 'Liam, March 19 @00:00'
				},
				{
					id: 113,
					name: 'balance_sheet.pdf',
					size: '0.5 MB',
					type: 'Document',
					lastModified: 'Liam, March 19 @00:00'
				}
			]
		},
		{
			id: 8,
			name: 'Code Review',
			size: '1.2 MB',
			type: 'Folder',
			lastModified: 'Ava, March 20 @00:00',
			files: [
				{
					id: 114,
					name: 'code_review.doc',
					size: '1 MB',
					type: 'Document',
					lastModified: 'Ava, March 20 @00:00'
				},
				{
					id: 115,
					name: 'code_snippet.js',
					size: '0.2 MB',
					type: 'Code',
					lastModified: 'Ava, March 20 @00:00'
				}
			]
		},
		{
			id: 9,
			name: 'Test Cases',
			size: '0.8 MB',
			type: 'Folder',
			lastModified: 'Noah, March 21 @00:00',
			files: [
				{
					id: 116,
					name: 'test_cases.xls',
					size: '0.5 MB',
					type: 'Document',
					lastModified: 'Noah, March 21 @00:00'
				},
				{
					id: 117,
					name: 'test_results.pdf',
					size: '0.3 MB',
					type: 'Document',
					lastModified: 'Noah, March 21 @00:00'
				}
			]
		},
		{
			id: 10,
			name: 'User Manual',
			size: '2.3 MB',
			type: 'Folder',
			lastModified: 'Isabella, March 22 @00:00',
			files: [
				{
					id: 118,
					name: 'user_manual.docx',
					size: '2 MB',
					type: 'Document',
					lastModified: 'Isabella, March 22 @00:00'
				},
				{
					id: 119,
					name: 'user_guide.pdf',
					size: '0.3 MB',
					type: 'Document',
					lastModified: 'Isabella, March 22 @00:00'
				}
			]
		},
		{
			id: 11,
			name: 'list.doc',
			size: '2 MB',
			type: 'document',
			lastModified: 'William, March 13 @00:00'
		},
		{
			id: 12,
			name: 'data.pdf',
			size: '1.5 MB',
			type: 'Image',
			lastModified: 'Mia, March 14 @00:00'
		},
		{
			id: 13,
			name: 'report.png',
			size: '3 MB',
			type: 'Image',
			lastModified: 'James, March 15 @00:00'
		},
		{
			id: 14,
			name: 'presentation.jpg',
			size: '1 MB',
			type: 'Image',
			lastModified: 'Charlotte, March 16 @00:00'
		},
		{
			id: 15,
			name: 'proposal.txt',
			size: '2.5 MB',
			type: 'Text',
			lastModified: 'Ethan, March 17 @00:00'
		}
	]
}
