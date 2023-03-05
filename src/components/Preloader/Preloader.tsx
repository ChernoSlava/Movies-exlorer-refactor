import React from 'react';

import { PreloaderContainer, PreloaderRound, PreloaderStyled } from './styled';

export const Loader = (): JSX.Element => {
  return (
    <PreloaderStyled>
      <PreloaderContainer>
        <PreloaderRound>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PreloaderRound>
      </PreloaderContainer>
    </PreloaderStyled>
  );
};
