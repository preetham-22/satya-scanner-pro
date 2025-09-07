import streamlit as st
import requests

# --- Configuration ---
st.set_page_config(
    page_title="SatyaCheck - AI Misinformation Detector",
    page_icon="🤖",
    layout="wide"
)

# --- State Management ---
if 'page' not in st.session_state:
    st.session_state.page = 'landing'
if 'analysis_result' not in st.session_state:
    st.session_state.analysis_result = None

# --- Page Navigation ---
def go_to_app():
    st.session_state.page = 'app'

def go_to_landing():
    st.session_state.page = 'landing'
    st.session_state.analysis_result = None # Clear old results

# --- Recreating the Professional Landing Page ---
def render_landing_page():
    # Using columns to create the layout from your screenshot
    col1, col2 = st.columns([1.5, 1], gap="large")

    with col1:
        st.title("Navigate the Noise. Find the Truth.")
        st.subheader("Our AI-powered tool helps you instantly analyze news articles and social media messages to detect misinformation, scams, and manipulation before you share.")
        
        if st.button("Analyze Your First Article Now", type="primary", use_container_width=True):
            go_to_app()
        
        st.markdown("""
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <span>✔ Free to Use</span>
                <span>✔ AI-Powered Analysis</span>
                <span>✔ Instant Results</span>
            </div>
        """, unsafe_allow_html=True)

    with col2:
        st.image("https://placehold.co/800x600/0A3D62/FFFFFF?text=SatyaCheck&font=inter", use_column_width=True)

# --- The Application/Analysis Page ---
def render_app_page():
    st.title("SatyaCheck AI Analysis Tool 🕵️‍♂️")

    if st.button("← Back to Home"):
        go_to_landing()

    user_input = st.text_area("Paste your WhatsApp forward, news URL, or any suspicious text here...", height=250, key="user_input_area")
    
    if st.button("Analyze with AI", type="primary", use_container_width=True):
        if user_input:
            API_URL = "https://satyacheck-api-479538600351.us-central1.run.app/analyze/"
            with st.spinner("Analyzing... Our AI is reading, checking for red flags, and verifying patterns. This may take a moment."):
                try:
                    payload = {"content": user_input}
                    response = requests.post(API_URL, json=payload, timeout=60)
                    response.raise_for_status()
                    st.session_state.analysis_result = response.json()
                except requests.exceptions.RequestException as e:
                    st.error(f"Error connecting to the analysis API. The service might be busy. Please try again. Details: {e}")
                except Exception as e:
                    st.error(f"An unexpected error occurred: {e}")
        else:
            st.warning("Please enter some text or a URL to analyze.")

    # Display the results if they exist
    if st.session_state.analysis_result:
        st.markdown("---")
        st.subheader("Analysis Report")
        result = st.session_state.analysis_result

        if "error" in result:
            st.error(f"Could not complete analysis: {result['error']}")
        else:
            score = result.get("trust_score", 0)
            st.metric("Trust Score", f"{score}/100")

            st.write(f"**Summary:** *{result.get('summary', 'N/A')}*")
            
            flags = result.get("analysis_flags", [])
            if flags:
                st.write("**🚩 Red Flags Detected:**")
                st.warning(" &nbsp; • &nbsp; ".join([flag.replace('_', ' ').title() for flag in flags]))
            
            st.info(f"**Educational Breakdown:**\n\n{result.get('educational_breakdown', 'N/A')}")
            st.caption(f"Detected Bias: {result.get('bias_rating', 'N/A')}")

# --- Main Router ---
if st.session_state.page == 'landing':
    render_landing_page()
else:
    render_app_page()

