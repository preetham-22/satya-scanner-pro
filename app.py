import streamlit as st
import requests  # <-- Added for API communication

# --- Configuration ---
st.set_page_config(
    page_title="Satya Scanner Pro",
    page_icon="🤖",
    layout="wide"
)

# --- State Management ---
# This helps the app remember which page to show and the analysis results
if 'page' not in st.session_state:
    st.session_state.page = 'landing'
if 'analysis_result' not in st.session_state:
    st.session_state.analysis_result = None
if 'show_results' not in st.session_state:
    st.session_state.show_results = False

# --- Page Navigation Functions ---
def go_to_app():
    st.session_state.page = 'app'

def go_to_landing():
    st.session_state.page = 'landing'

# --- The Landing Page ---
def render_landing_page():
    st.title("Navigate the Noise. Find the Truth.")
    st.subheader(
        "Our AI-powered tool helps you instantly analyze news articles and social media messages to detect misinformation, scams, and manipulation before you share."
    )
    st.markdown("---")

    # Use columns for a cleaner layout
    col1, col2 = st.columns([2, 1])
    with col1:
        st.markdown(
            """
            ### How It Works
            1.  **Paste & Go:** Simply paste any text or news article URL into the analysis box.
            2.  **AI-Powered Analysis:** Our advanced AI reads the content, checking for red flags, emotional language, and lack of sources.
            3.  **Get Your Report:** Receive an instant, easy-to-understand report with a trust score and a breakdown of why the content might be misleading.
            """
        )
        if st.button("Analyze Your First Article Now", type="primary"):
            go_to_app()
    with col2:
        st.image("https://placehold.co/600x400/0A3D62/FFFFFF?text=SatyaCheck\nVisual&font=inter", use_column_width=True)

# --- The Application Page ---
def render_app_page():
    st.title("Satya Scanner Pro: AI Analysis Tool 🕵️‍♂️")

    if st.button("← Back to Home"):
        go_to_landing()

    user_input = st.text_area("Paste your WhatsApp forward, news URL, or any suspicious text here...", height=250)
    analyze_button = st.button("Analyze with AI", type="primary")

    # --- THIS IS THE INTEGRATED BACKEND LOGIC ---
    if analyze_button:
        if user_input:
            API_URL = "https://satyacheck-api-479538600351.us-central1.run.app/analyze/"
            with st.spinner("Analyzing... Our AI is reading, checking sources, and looking for red flags. This may take a moment."):
                try:
                    payload = {"content": user_input}
                    response = requests.post(API_URL, json=payload)
                    response.raise_for_status()
                    analysis = response.json()
                    st.session_state.analysis_result = analysis
                    st.session_state.show_results = True
                except requests.exceptions.RequestException as e:
                    st.error(f"Error connecting to the analysis API. The service might be starting up. Please try again in a moment. Details: {e}")
                except Exception as e:
                    st.error(f"An unexpected error occurred: {e}")
        else:
            st.warning("Please enter some text or a URL to analyze.")

    # --- This section displays the results after the API call is successful ---
    if st.session_state.show_results and st.session_state.analysis_result:
        st.markdown("---")
        st.subheader("Analysis Report")
        result = st.session_state.analysis_result

        if "error" in result:
            st.error(f"The API returned an error: {result['error']}")
        else:
            score = result.get("trust_score", 0)
            st.metric("Trust Score", f"{score}/100")

            st.write("**Summary:**", f"*{result.get('summary', 'N/A')}*")
            st.write("**Detected Bias:**", result.get("bias_rating", "N/A"))

            flags = result.get("analysis_flags", [])
            if flags:
                st.write("**🚩 Red Flags Detected:**")
                # Display flags as pills/tags in columns for a clean look
                cols = st.columns(len(flags) if len(flags) < 4 else 4)
                for i, flag in enumerate(flags):
                    cols[i % 4].warning(flag.replace("_", " ").title())
            
            st.info(f"**Educational Breakdown:**\n\n{result.get('educational_breakdown', 'N/A')}")

# --- Main App Router ---
if st.session_state.page == 'landing':
    render_landing_page()
else:
    render_app_page()

