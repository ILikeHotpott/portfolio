// galleries from different directions

const galleries = [
    {
        direction: 'right',
        from: {x: '-500%', y: '0%'},
        to: {x: '500%', y: '0%'},
        rotation: 'rotate-0',
    },
    {
        direction: 'up',
        from: {x: '500%', y: '0'},
        to: {x: '-500%', y: '0'},
        rotation: 'rotate-[90deg]',
    },
    {
        direction: 'down',
        from: {x: '500%', y: '50%'},
        to: {x: '-500%', y: '50%'},
        rotation: 'rotate-[-90deg]',
    },
    {
        direction: 'up',
        from: {x: '500%', y: '150%'},
        to: {x: '-500%', y: '150%'},
        rotation: 'rotate-[90deg]',
    },

    {
        direction: 'left',
        from: {x: '500%', y: '100%'},
        to: {x: '-500%', y: '100%'},
        rotation: 'rotate-0',
    },
    {
        direction: 'diagonal1',
        from: {x: '-200vw', y: "0"},
        to: {x: '200vw', y: '0'},
        rotation: 'rotate-[30deg]',

    },
    {
        direction: 'diagonal2',
        from: {x: '120vw', y: '0'},
        to: {x: '-250vw', y: '0'},
        rotation: 'rotate-[-30deg]',
    },

    {
        direction: 'diagonal3',
        from: {x: '-200vw', y: '-15vh'},
        to: {x: '200vw', y: '-15vh'},
        rotation: 'rotate-[-60deg]',
    },

    {
        direction: 'diagonal4',
        from: {x: '-200vw', y: '-15vh'},
        to: {x: '200vw', y: '-15vh'},
        rotation: 'rotate-[60deg]',
    },
];