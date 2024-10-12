'use client'
import { create } from "zustand";

export const useOurStore = create(
    (set) => ({

        theme: 'light',
        changeTheme: (theme) => set(() => ({ theme })),

        chat: [],
        loadingChat: false,
        conversationID: null,
        addChat: ({ text, isBot, imageURL, sources }) => set((state) => ({ chat: [...state.chat, { text: text, isBot: isBot, imageURL: imageURL || null, sources: sources }] })),
        resetChat: () => set(() => ({
            chat: [],
            conversationID: null,
            loadingChat: false
        })),
        setLoading: (bool) => set(() => ({ loadingChat: bool })),
        setConversationID: (id) => set(() => ({ conversationID: id })),

        language: "English",
        changeLanguage: (text) => set(() => ({ language: text })),

        sortBy: null,
        setSort: (order) => set(() => ({ sortBy: order })),

        chatContactDisplay: true,
        setChatContactDisplay: (bool) => set(() => ({ chatContactDisplay: bool })),

        haveProfile: false,
        setHaveProfile: (bool) => set(() => ({ haveProfile: bool })),

        post: {
            text: "",
            media: [],
            preview: [],
            tags: [],
            uploading: false,
            posting: false,
            postToComment: {},
        },
        setPost: (post) => set(() => ({ post: post })),
        resetPost: () => set(() => ({ post: { text: "", media: [], preview: [], tags: [], uploading: false, posting: false, haveProfile: true, postToComment: {} } })),
        setPostText: (text) => set((state) => ({ post: { ...state.post, text: text } })),
        setPostPreview: (preview) => set((state) => ({ post: { ...state.post, preview: [...state.post.preview, preview] } })),
        setPostMedia: (media) => set((state) => ({ post: { ...state.post, media: [...state.post.media, media] } })),
        setPostTags: (tags) => set((state) => ({ post: { ...state.post, tags: [...state.post.tags, tags] } })),
        setPostUploading: (uploading) => set((state) => ({ post: { ...state.post, uploading: uploading } })),
        setPostPosting: (posting) => set((state) => ({ post: { ...state.post, posting: posting } })),
        setPostToComment: (postToComment) => set((state) => ({ post: { ...state.post, postToComment: postToComment } })),

        userLikes: [],
        userDislikes: [],
        setUserLikes: (likes) => set(() => ({ userLikes: likes })),
        setUserDislikes: (dislikes) => set(() => ({ userDislikes: dislikes })),
        userProfile: {},
        setUserProfile: (profile) => set(() => ({ userProfile: profile })),
    })
)